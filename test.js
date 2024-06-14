function callEgg() {
    fetch("https://api.chickcoop.io/hatch/manual", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,ru;q=0.8",
    "authorization": "query_id=AAE4r7QcAAAAADivtByUZsPh&user=%7B%22id%22%3A481603384%2C%22first_name%22%3A%22Ed%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22trsw8%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1718395663&hash=6a539d955dda6745b013c8d175584349fa951221c026abc77e35828b4a22ef0c",
    "content-type": "application/octet-stream",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://game.chickcoop.io/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "POST",
  "mode": "cors",
});
}
callEgg()
if (callEgg()) {
    console.log('Injected');
} else {
    console.error('Something wrong');
}
