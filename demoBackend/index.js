require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "P-S-S-7",
  "id": 128120053,
  "node_id": "U_kgDOB6L09Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/128120053?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/P-S-S-7",
  "html_url": "https://github.com/P-S-S-7",
  "followers_url": "https://api.github.com/users/P-S-S-7/followers",
  "following_url": "https://api.github.com/users/P-S-S-7/following{/other_user}",
  "gists_url": "https://api.github.com/users/P-S-S-7/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/P-S-S-7/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/P-S-S-7/subscriptions",
  "organizations_url": "https://api.github.com/users/P-S-S-7/orgs",
  "repos_url": "https://api.github.com/users/P-S-S-7/repos",
  "events_url": "https://api.github.com/users/P-S-S-7/events{/privacy}",
  "received_events_url": "https://api.github.com/users/P-S-S-7/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Prashant Singh Shekhawat",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-03-17T05:20:52Z",
  "updated_at": "2024-06-09T12:49:32Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('pssdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login PSS</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Hello</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
