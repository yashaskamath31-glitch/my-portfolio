@echo off
echo ========================================================
echo Deploying Yashas H C Portfolio to Vercel...
echo ========================================================
cd /d "C:\Users\PC - 02\.gemini\antigravity\scratch\yashas-portfolio"
echo.
echo Running Vercel deployment...
npx vercel --prod
pause
