@echo off
echo ========================================================
echo Pushing Yashas H C Portfolio to GitHub...
echo ========================================================
cd /d "C:\Users\PC - 02\.gemini\antigravity\scratch\yashas-portfolio"
set "GIT_PATH=C:\Users\PC - 02\AppData\Local\Programs\@codebufffreebuff-desktop\resources\git\cmd\git.exe"

if exist "%GIT_PATH%" (
    echo Using Git from %GIT_PATH%
    "%GIT_PATH%" push -u origin main
) else (
    git push -u origin main
)

echo.
echo ========================================================
echo If prompted, please click 'Sign in with browser' to finish!
echo ========================================================
pause
