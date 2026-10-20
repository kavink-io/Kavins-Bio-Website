@echo off
title Kavin K Portfolio - Build
cd /d "%~dp0"
set "PATH=C:\Program Files\nodejs;%PATH%"
echo Building Kavin K Portfolio for production...
call npm.cmd run build
pause
