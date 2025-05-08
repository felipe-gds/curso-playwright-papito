import { test, expect } from '@playwright/test';

test('deve tocar uma musica', async ({ page }) => {

  //na linha src, foi alterado o caminho do arquivo de audio, que deve existir para teste no servidor
  const song = {
    id: 1,
    title: "Bughium",
    artist: "Nullvana",
    description: "Nullvana",
    image: "https://raw.githubusercontent.com/qaxperience/mock/main/covers/nevertesting.jpg",
    type: "album",
    src: "https://raw.githubusercontent.com/qaxperience/mock/main/songs/nirvana.mp3"
  }

  //interceptar a rota de requisição para o arquivo de audio, e retornar o arquivo que está no servidor
  await page.route('**/songs', route => route.fulfill({
    status: 200,
    body: JSON.stringify([song])
}))

  await page.goto('/')

  const songCard = page.locator('.song').filter({ hasText: song.title })

  const play = songCard.locator('.play')
  const pause = songCard.locator('.pause')

  await play.click()
  await expect(pause).toBeVisible({ timeout: 2000 })
  await expect(play).toBeVisible({ timeout: 7000 })

  //await page.click(`//div[contains(@class, "song")]//h6[text()="${song.title}"]/..//button`)
});