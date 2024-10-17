# keyboard_monitor.py
import keyboard
import sys
import time
import ctypes
from ctypes import wintypes
from eng_kor_converter import engkor
from eng_kor_map import shift_keys
import json
import logging
import os

logging.basicConfig(filename='keyboard_monitor.log', level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s')

# 설정 파일 경로
CONFIG_FILE = 'config.json'

user32 = ctypes.WinDLL('user32', use_last_error=True)

LoadKeyboardLayout = user32.LoadKeyboardLayoutW
LoadKeyboardLayout.argtypes = [wintypes.LPCWSTR, wintypes.UINT]
LoadKeyboardLayout.restype = wintypes.HKL

KOREAN_LAYOUT_ID = "00000412"  # 한국어 (Microsoft IME)
ENGLISH_LAYOUT_ID = "00000409"  # 영어 (미국)

monitoring = False
collected_keys = []
toggle_key = '\\'  # 기본값

def load_config():
    global toggle_key
    if not os.path.exists(CONFIG_FILE):
        logging.warning(f"설정 파일 '{CONFIG_FILE}'가 존재하지 않습니다. 기본 토글 키를 사용합니다: {toggle_key}")
        return
    try:
        with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
            config = json.load(f)
            toggle_key = config.get('toggle_key', toggle_key)
            logging.info(f"설정 파일 로드 완료. 토글 키: {toggle_key}")
    except Exception as e:
        logging.error(f"설정 파일 로드 중 오류 발생: {e}")
        print(f"설정 파일 로드 중 오류 발생: {e}")

def toggle_monitoring():
    global monitoring
    monitoring = not monitoring
    if monitoring:
        logging.info("키보드 입력 모니터링 시작")
        print("키보드 입력 모니터링 시작")
        collected_keys.clear()
    else:
        logging.info("키보드 입력 모니터링 중지")
        print("키보드 입력 모니터링 중지")
        process_and_insert()

def exit_monitoring():
    global monitoring
    monitoring = False
    logging.info("모니터링 취소")
    print("모니터링 취소")
    collected_keys.clear()

def on_key_press(event):
    global collected_keys
    if event.name == 'esc':
        exit_monitoring()
        return
    if event.name == toggle_key:
        toggle_monitoring()
        return
    if not monitoring:
        return
        
    logging.info(f"키 입력 감지: {event.name}")
    if event.name == 'backspace':
        collected_keys.pop()
    elif event.name == 'space':
        collected_keys.append(' ')
    elif len(event.name) == 1:
        print(event.name)
        if event.name.lower() in shift_keys:
            key = event.name
        else:
            key = event.name.lower()
        collected_keys.append(key)

def switch_keyboard_layout(layout_id):
    try:
        LoadKeyboardLayout(layout_id, 1)
        logging.info(f"입력 언어 전환: {layout_id}")
    except Exception as e:
        logging.error(f"입력 언어 전환 중 오류 발생: {e}")

def process_and_insert():
    global toggle_key
    try:
        # 입력 언어를 한국어로 전환
        switch_keyboard_layout(KOREAN_LAYOUT_ID)
        time.sleep(0.1)

        # 수집된 키를 한글 문자열로 변환
        english_str = ''.join(collected_keys)
        korean_string = engkor(english_str)
        logging.info(f"수집된 한글 입력: {korean_string}")
        print(f"수집된 한글 입력: {korean_string}")

        if korean_string:
            # 영어 입력 삭제
            if not toggle_key == 'enter':
                for _ in range(len(collected_keys)):
                    keyboard.press_and_release('backspace')
                    time.sleep(0.03)
                keyboard.press_and_release('backspace')
                time.sleep(0.03)
                keyboard.press_and_release('backspace')
                logging.info(f"백스페이스 실행 : {len(collected_keys)+2}회")
            time.sleep(0.03)
            # 한글 문자열 타이핑
            if toggle_key == 'enter':
                keyboard.press_and_release('enter')
            keyboard.write(korean_string, delay=0.03)
            if toggle_key == 'enter':
                keyboard.press_and_release('enter')
            logging.info("한글 문자열 타이핑 완료")
        else:
            logging.warning("변환할 한글 문자가 없습니다.")
            print("변환할 한글 문자가 없습니다.")

        # 입력 언어를 영어로 전환
        time.sleep(0.1)
        switch_keyboard_layout(ENGLISH_LAYOUT_ID)
    except Exception as e:
        logging.error(f"입력 처리 중 오류 발생: {e}")

def main():
    load_config()
    keyboard.on_press(on_key_press)

    print(f"프로그램이 실행 중입니다. '{toggle_key}' 키를 눌러 입력을 시작/종료하세요.(config.json을 수정하여 변경 가능합니다)")
    print("종료하려면 Ctrl + C를 누르세요.")
    print()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n프로그램을 종료합니다.")
        sys.exit()

if __name__ == "__main__":
    main()
