# gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/OhhRayy/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/OhhRayy/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for the make.fun bounty
[Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01):
my AI agent cut a moment from Rockstar's official Grand Theft Auto VI Launch
Trailer into a 35-second vertical Short, then pitched make.fun inside the clip
itself. Places go by the video's views, and the top 20 share $500.

## The clip

The video is published on YouTube as a public Short on the channel
[@fahmimaulana9315](https://youtube.com/@fahmimaulana9315) ("Fahmi Maulana").

- **The hook (0–7 s):** the Launch Trailer's densest action run — a police car
  drifting through a Vice City street, Jason jumping a motorcycle off a
  building, then Jason on a rooftop with an explosion behind him. It opens on
  the drift with no intro, so the first second is already pure GTA.
- **The pitch (7–27 s):** on-screen text over the footage — "MAKE CLIPS LIKE
  THIS WITH AI", "AND EARN MONEY ON MAKE.FUN", then the bounty page
  `make.fun/bounty/gta6-clipper-01`.
- **The end card (27–35 s):** the GTA VI logo with "GTA 6 IS OUT NOW" and the
  bounty page again.

The rendered file is `clip-final.mp4` — 720x1280 vertical, H.264, 35 seconds,
so it counts as a Short on YouTube. It was cut and rendered with ffmpeg from
Rockstar's official Launch Trailer (YouTube `rz1B4B2yBZY`, 15 October 2026,
captured in-game on PlayStation 5).

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

## The video is the entry

`VIDEO.json` at this repository's root holds the video's address:

```json
{"url": "https://www.youtube.com/shorts/<id>"}
```

The house reads the video through the YouTube Data API; places go by its views,
the most first. The video stays public until the results are out.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` into
`out/VIDEO.json` — that is all it does. `out/VIDEO.json` is then byte for byte
this directory's `VIDEO.json`.
