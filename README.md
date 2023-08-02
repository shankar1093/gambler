# Gambler - Automated Chumba Code Game with Puppeteer

## Description

Gambler is an automated script built using Puppeteer for playing the Chumba Code game on the website "https://www.chumbacasino.com/". This script uses Puppeteer to interact with the website, navigate through the login process, and take a screenshot of the resulting page.

## How to Run the Automated Chumba Code Game

To run the automated Chumba Code game, follow the steps below:

1. **Install Dependencies**:

   Before running the script, make sure you have Node.js installed on your system. If you haven't installed Node.js yet, you can download it from the official website: [https://nodejs.org](https://nodejs.org)

   Once Node.js is installed, navigate to the directory containing the script, and run the following command to install the required dependencies:

   ```
   npm install puppeteer
   ```

2. **Run the Script**:

   After installing the dependencies, you can now run the automated Chumba Code game using the following command:

   ```
   node chumba_code.js
   ```

   The script will automatically launch a headful Chromium browser using Puppeteer, navigate to the Chumba Casino website, log in with the provided email and password, close the daily bonus popup, click on the "Postal Request" link in the footer, and finally take a screenshot of the resulting page. The screenshot will be saved as "page.png" in the same directory.

## Important Note

Please note that running automated scripts on websites may be against the terms of service of the website. Make sure to check the website's terms and conditions before running this script. The purpose of this script is for educational and demonstration purposes only. Use it responsibly and with caution.

## Disclaimer

This script is provided as-is, without any warranty. The use of this script is at your own risk. The author is not responsible for any issues that may arise from using this script.

Enjoy the automated Chumba Code game! 😊
