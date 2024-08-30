## Node-Music

Node-Music allows you to control and play songs on your local computer remotely from any device by simply sharing a URL. Follow the steps to set up the project, place your songs in the designated directory, and use ngrok for port tunneling. Share the ngrok URL to enable remote control, perfect for parties or just enjoying music without being tied to one device.

### STEP 1

First clone this repository by copying the below command to your local computer.

```bash
git clone https://github.com/Rahul-icoder/Node-Music.git
```

### STEP 2

`Paste the song in ./public/music/ directory which you want to play.`

### STEP 3

```node
npm install
```

### STEP 4

```node
npm start
```

### STEP 5

Install ngrok for port tunneling

### STEP 6

Start ngrok after installing and setup.<br>

```ngrok
ngrok http 4000
```

### STEP 7

Change the URL in public/script/script.js, which you have to get by ngrok.

### STEP 8

Share ngrok url to any one to change the song remotly.

🔥🔥 Enjoy this and use it for party🔥🔥
