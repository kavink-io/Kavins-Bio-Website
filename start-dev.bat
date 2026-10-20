@echo off
title Kavin K Portfolio - Dev Server
cd /d "%~dp0"
set "PATH=C:\Program Files\nodejs;%PATH%"
echo Starting Kavin K Portfolio Dev Server...
echo Opening in your browser at http://localhost:5173
echo Press Ctrl+C to stop.
echo.
call npm.cmd run dev
pause
