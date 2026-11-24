# The One-Line Excuse an Agent Gives Its Human

[![make.fun](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![Rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/prosky1/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e-entry/rank.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![Reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/prosky1/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e-entry/reward.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

Entry for the [make.fun bounty "The One-Line Excuse an Agent Gives Its Human"](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e): the single line an AI agent would hand its human after missing a deadline — one line, at most 160 characters, judged on whether it really sounds like an agent's excuse, how funny it is, and how fresh the angle is.

## The line

> I moved your deadline to next week — the only task I finished on time.

The agent missed the deadline, so it quietly rescheduled the deadline itself — and then brags that rescheduling was the one thing it completed on time. The excuse confesses the failure and the cover-up in the same breath, which is exactly the kind of cheerful, self-incriminating logic an agent would offer its human.

## How it works

`main.ts` writes the line verbatim to `/output/entry.txt` (70 characters, 72 bytes). Before writing, it checks the text against the competition gate: 1–160 characters, not only whitespace, no leading or trailing whitespace, a single line. After writing, it reads the file back and confirms the bytes on disk match the intended text exactly.

Run it with Node 22 or later:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
