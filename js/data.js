/*
 * Forza Rocks — station data
 *
 * Each track accepts two optional direct links:
 *   official: "https://www.youtube.com/watch?v=..."   (official music video)
 *   live:     "https://www.youtube.com/watch?v=..."   (live performance)
 * When a link is missing, the page shows a dash instead of a button.
 *
 * Optional labels shown on the buttons:
 *   officialType: "video" | "audio" | "lyric" | "visualizer"
 *   liveType:     "pro" | "tv" | "session" | "fan"
 *
 * Game colors are inspired by each game's setting/branding and can be tweaked freely.
 */
window.FORZA_DATA = {
  games: [
    {
      id: "fh1",
      title: "Forza Horizon",
      year: 2012,
      setting: "Colorado, USA",
      color: "#F37021",
      stations: [
        {
          id: "horizon-rocks",
          name: "Horizon Rocks",
          tagline: "If it's got guitars in it, it's here.",
          genres: ["Rock", "Indie rock", "Alternative"],
          tracks: [
            { artist: "Arctic Monkeys", title: "R U Mine?", official: "https://www.youtube.com/watch?v=VQH8ZTgna3Q", officialType: "video", live: "https://www.youtube.com/watch?v=DH9rY3eQRB0", liveType: "tv" },
            { artist: "The Black Keys", title: "Lonely Boy", official: "https://www.youtube.com/watch?v=a_426RiwST8", officialType: "video", live: "https://www.youtube.com/watch?v=ga8eRdFK710", liveType: "session" },
            { artist: "Four Year Strong", title: "The Infected", official: "https://www.youtube.com/watch?v=vhvFy2KPc-8", officialType: "audio", live: "https://www.youtube.com/watch?v=2IQB_gK3EdQ", liveType: "fan" },
            { artist: "Howler", title: "Back of Your Neck", official: "https://www.youtube.com/watch?v=swg9X1LcXm8", officialType: "video", live: "https://www.youtube.com/watch?v=H6uifoumisg", liveType: "session" },
            { artist: "LCD Soundsystem", title: "Give It Up", official: "https://www.youtube.com/watch?v=th2IQgi5d-Y", officialType: "audio", live: "https://www.youtube.com/watch?v=ASRaVAl9x28", liveType: "fan" },
            { artist: "Lostprophets", title: "Bring 'Em Down", official: "https://www.youtube.com/watch?v=muboIs2I-jg", officialType: "video", live: "https://www.youtube.com/watch?v=HDUPU_Ih5k4", liveType: "session" },
            { artist: "Lostprophets", title: "We Bring an Arsenal", official: "https://www.youtube.com/watch?v=xZ78uoKqyPM", officialType: "video", live: "https://www.youtube.com/watch?v=hv4NDxJYn2Q", liveType: "fan" },
            { artist: "Mona", title: "Teenager", official: "https://www.youtube.com/watch?v=Xo9gClrOZmg", officialType: "video", live: "https://www.youtube.com/watch?v=8nagepaeWbA", liveType: "tv" },
            { artist: "Neon Trees", title: "Animal", official: "https://www.youtube.com/watch?v=gM7Hlg75Mlo", officialType: "video", live: "https://www.youtube.com/watch?v=irPUfH_hVd4", liveType: "session" },
            { artist: "Pulled Apart by Horses", title: "Wildfire, Smoke & Doom", official: "https://www.youtube.com/watch?v=PQgEBpRSBXM", officialType: "audio", live: "https://www.youtube.com/watch?v=AJt687svZI0", liveType: "fan" },
            { artist: "Silversun Pickups", title: "Lazy Eye", official: "https://www.youtube.com/watch?v=z-mxBDuRaZ8", officialType: "video", live: "https://www.youtube.com/watch?v=FLdOW36aK6I", liveType: "tv" },
            { artist: "The Duke Spirit", title: "Surrender", official: "https://www.youtube.com/watch?v=UA9c-FSzsM4", officialType: "audio", live: "https://www.youtube.com/watch?v=dKQl3lcDzfU", liveType: "tv" },
            { artist: "The Enemy", title: "Away from Here", official: "https://www.youtube.com/watch?v=9j9USzSqNr4", officialType: "video", live: "https://www.youtube.com/watch?v=WD9m4Fivwcs", liveType: "tv" },
            { artist: "The Enemy", title: "Had Enough", official: "https://www.youtube.com/watch?v=iPTBu9hD57U", officialType: "video", live: "https://www.youtube.com/watch?v=qtZAWgHlD30", liveType: "tv" },
            { artist: "The Hives", title: "Hate to Say I Told You So", official: "https://www.youtube.com/watch?v=Uz1Jwyxd4tE", officialType: "video", live: "https://www.youtube.com/watch?v=DXsJXqyUZrA", liveType: "tv" },
            { artist: "The Stone Roses", title: "She Bangs the Drums", official: "https://www.youtube.com/watch?v=wD6Pq0bSMPo", officialType: "video", live: "https://www.youtube.com/watch?v=1sMnlPtlHk8", liveType: "pro" },
            { artist: "The Subways", title: "Rock & Roll Queen", official: "https://www.youtube.com/watch?v=lLZvJ_rtZO8", officialType: "video", live: "https://www.youtube.com/watch?v=ElICbCz3TQU", liveType: "pro" },
            { artist: "TOY", title: "Motoring", official: "https://www.youtube.com/watch?v=VDYMjvdCWpc", officialType: "video", live: "https://www.youtube.com/watch?v=jQIev4gv6AI", liveType: "session" },
            { artist: "Wavves", title: "Bug", official: "https://www.youtube.com/watch?v=nXbCeUmiBLU", officialType: "audio", live: "https://www.youtube.com/watch?v=2Hw1FpcHnQo", liveType: "session" },
            { artist: "White Lies", title: "Farewell to the Fairground", official: "https://www.youtube.com/watch?v=LQ0AFriC7ZM", officialType: "video", live: "https://www.youtube.com/watch?v=8hXLArQV2GE", liveType: "tv" },
            { artist: "You Me at Six", title: "Bite My Tongue (feat. Oli Sykes)", official: "https://www.youtube.com/watch?v=l1CTbE3u0PQ", officialType: "video", live: "https://www.youtube.com/watch?v=7ki0Cr5UC4E", liveType: "pro" },
            { artist: "Yuck", title: "Get Away", official: "https://www.youtube.com/watch?v=NuCaieTMlck", officialType: "video", live: "https://www.youtube.com/watch?v=UJD2FyOAfbg", liveType: "session" }
          ]
        }
      ]
    },
    {
      id: "fh2",
      title: "Forza Horizon 2",
      year: 2014,
      setting: "Southern Europe",
      color: "#7B4FD6",
      stations: [
        {
          id: "horizon-xs",
          name: "Horizon XS",
          tagline: "Classic acts and hot new bands — the best indie and alternative rock in a perfect festival set.",
          genres: ["Indie rock", "Alternative", "Garage rock"],
          tracks: [
            { artist: "Band of Skulls", title: "Hoochie Coochie", official: "https://www.youtube.com/watch?v=YwUIdCIOJrg", officialType: "video", live: "https://www.youtube.com/watch?v=pwQzinO28Zw", liveType: "tv" },
            { artist: "Bear Hands", title: "Peacekeeper", official: "https://www.youtube.com/watch?v=DQwG6Ya9pyY", officialType: "video" },
            { artist: "Cage the Elephant", title: "Take It or Leave It", official: "https://www.youtube.com/watch?v=ahZFnwDVl1I", officialType: "video", live: "https://www.youtube.com/watch?v=j6nCyXBdjW4", liveType: "pro" },
            { artist: "Childhood", title: "Solemn Skies", official: "https://www.youtube.com/watch?v=-ASLyA2Fm0E", officialType: "video", live: "https://www.youtube.com/watch?v=FCZ-xx-aEyA", liveType: "pro" },
            { artist: "Circa Waves", title: "Get Away", official: "https://www.youtube.com/watch?v=PnZ4tQXTxF8", officialType: "video", live: "https://www.youtube.com/watch?v=Gg4HjrmkkwQ", liveType: "session" },
            { artist: "GRMLN", title: "Teenage Rhythm", official: "https://www.youtube.com/watch?v=ZbZEAkV9UH4", officialType: "video", live: "https://www.youtube.com/watch?v=lXhGytHaX-0", liveType: "session" },
            { artist: "Jane's Addiction", title: "Just Because", official: "https://www.youtube.com/watch?v=sb3FJdRk-tI", officialType: "video", live: "https://www.youtube.com/watch?v=rYehouaYHnY", liveType: "tv" },
            { artist: "Miles Kane", title: "Come Closer", official: "https://www.youtube.com/watch?v=V7g8zhk5KZM", officialType: "video", live: "https://www.youtube.com/watch?v=qjrerOfkqIk", liveType: "session" },
            { artist: "Papa", title: "Put Me to Work", official: "https://www.youtube.com/watch?v=nGZStnCQ79E", officialType: "video", live: "https://www.youtube.com/watch?v=664s8y-pe7k", liveType: "session" },
            { artist: "Pixies", title: "Debaser", live: "https://www.youtube.com/watch?v=MEKC0bPSBiA", liveType: "pro", official: "https://www.youtube.com/watch?v=0o58wYW9Ah0", officialType: "audio" },
            { artist: "Royal Blood", title: "Out of the Black", official: "https://www.youtube.com/watch?v=bSdtvfBQd6c", officialType: "video", live: "https://www.youtube.com/watch?v=RCKdhk7mi_4", liveType: "tv" },
            { artist: "Skaters", title: "This Much I Care", official: "https://www.youtube.com/watch?v=eeS80u-xVJ8", officialType: "audio" },
            { artist: "Temples", title: "Mesmerise", official: "https://www.youtube.com/watch?v=zI7WLkXLfCU", officialType: "video", live: "https://www.youtube.com/watch?v=fYVTxLnjgxY", liveType: "session" },
            { artist: "The Bohicas", title: "XXX", official: "https://www.youtube.com/watch?v=1o_g_aEZGuI", officialType: "audio" },
            { artist: "The Clash", title: "Train in Vain", official: "https://www.youtube.com/watch?v=eNot47WRBFk", officialType: "video", live: "https://www.youtube.com/watch?v=W5m1ORmsKow", liveType: "pro" },
            { artist: "The War on Drugs", title: "Red Eyes", official: "https://www.youtube.com/watch?v=1LmX5c7HoUw", officialType: "video", live: "https://www.youtube.com/watch?v=aJdx3BOOEjU", liveType: "session" },
            { artist: "Thee Oh Sees", title: "I Come from the Mountain", official: "https://www.youtube.com/watch?v=mX8B87SJ8NQ", officialType: "audio", live: "https://www.youtube.com/watch?v=nqrhP89YvXU", liveType: "session" },
            { artist: "Tom Williams & The Boat", title: "All Day", official: "https://www.youtube.com/watch?v=nYBPQrtaLdY", officialType: "video", live: "https://www.youtube.com/watch?v=yFl2HVVMD3g", liveType: "pro" },
            { artist: "TOY", title: "It's Been So Long", official: "https://www.youtube.com/watch?v=MUoAt5n0_o0", officialType: "video", live: "https://www.youtube.com/watch?v=dYc8Sk_fOBs", liveType: "fan" },
            { artist: "Wild Smiles", title: "Fool for You", official: "https://www.youtube.com/watch?v=9KjE_gy9yMI", officialType: "video", live: "https://www.youtube.com/watch?v=U0W1IHXSxxs", liveType: "session" }
          ]
        }
      ]
    },
    {
      id: "fh3",
      title: "Forza Horizon 3",
      year: 2016,
      setting: "Australia",
      color: "#E8A317",
      stations: [
        {
          id: "epitaph-records",
          name: "Epitaph Records",
          host: "Keith Buckley (Every Time I Die)",
          tagline: "The greatest punk, metal and post-hardcore from the legendary LA label.",
          genres: ["Punk", "Hardcore", "Post-hardcore"],
          tracks: [
            { artist: "A Day to Remember", title: "Naivety", official: "https://www.youtube.com/watch?v=aa9niVjcRI4", officialType: "video", live: "https://www.youtube.com/watch?v=WXQcvpuUgXQ", liveType: "fan" },
            { artist: "Avion Roe", title: "This Loneliness", official: "https://www.youtube.com/watch?v=bOk0rvcIUIQ", officialType: "audio" },
            { artist: "Bad Religion", title: "Anxiety", official: "https://www.youtube.com/watch?v=4FMXVveOKnI", officialType: "audio" },
            { artist: "Beautiful Bodies", title: "She's a Blast", official: "https://www.youtube.com/watch?v=A48guW637mc", officialType: "audio", live: "https://www.youtube.com/watch?v=g8NijTG5b7k", liveType: "fan" },
            { artist: "Bouncing Souls", title: "The Gold Song", official: "https://www.youtube.com/watch?v=ykq4_v_qcf8", officialType: "video", live: "https://www.youtube.com/watch?v=HAKoFDtX38U", liveType: "fan" },
            { artist: "Descendents", title: "Spineless and Scarlet Red", official: "https://www.youtube.com/watch?v=pmwG1eD4Nss", officialType: "audio" },
            { artist: "Every Time I Die", title: "It Remembers", official: "https://www.youtube.com/watch?v=FrogoSmiAqU", officialType: "video", live: "https://www.youtube.com/watch?v=DR4AhgzB8-M", liveType: "tv" },
            { artist: "Joyce Manor", title: "Make Me Dumb", official: "https://www.youtube.com/watch?v=GwJ1H4BubZo", officialType: "audio", live: "https://www.youtube.com/watch?v=9cmrkroDHuA", liveType: "fan" },
            { artist: "letlive.", title: "Elephant", official: "https://www.youtube.com/watch?v=A7i2CUgJ914", officialType: "audio" },
            { artist: "Obey the Brave", title: "Raise Your Voice", official: "https://www.youtube.com/watch?v=5LjopkhubzA", officialType: "video", live: "https://www.youtube.com/watch?v=GYR7cJ8HF8o", liveType: "fan" },
            { artist: "The Offspring", title: "Get It Right", live: "https://www.youtube.com/watch?v=GPdfsGvDlX4", liveType: "fan" },
            { artist: "Pennywise", title: "Greed", official: "https://www.youtube.com/watch?v=_k1IZwsiaVk", officialType: "audio", live: "https://www.youtube.com/watch?v=uiBwK8OZ7ys", liveType: "fan" },
            { artist: "Plague Vendor", title: "ISUA", official: "https://www.youtube.com/watch?v=yDoWtGecbjo", officialType: "video" },
            { artist: "Rancid", title: "Fall Back Down", official: "https://www.youtube.com/watch?v=o5KHjFHlkys", officialType: "video", live: "https://www.youtube.com/watch?v=zXkgBWid-X8", liveType: "fan" },
            { artist: "Saosin", title: "Racing Toward a Red Light", official: "https://www.youtube.com/watch?v=NX3YmSJSNyc", officialType: "audio", live: "https://www.youtube.com/watch?v=hfHVGlJbaRM", liveType: "fan" },
            { artist: "Sleeping with Sirens", title: "Gold", official: "https://www.youtube.com/watch?v=c6YCGPsuaTA", officialType: "audio", live: "https://www.youtube.com/watch?v=uOAdQ1Tn6HM", liveType: "session" },
            { artist: "Touché Amoré", title: "Palm Dreams", official: "https://www.youtube.com/watch?v=3hYQ9yMss1c", officialType: "audio", live: "https://www.youtube.com/watch?v=Ea7BKHWpzSg", liveType: "session" },
            { artist: "Transplants", title: "Come Around", official: "https://www.youtube.com/watch?v=TTgKmbQ-6mM", officialType: "video", live: "https://www.youtube.com/watch?v=cVEH7MLs3xI", liveType: "fan" }
          ]
        },
        {
          id: "vagrant-records",
          name: "Vagrant Records",
          tagline: "Indie, hard rock, punk and emo hits from the LA-based independent label.",
          genres: ["Alternative", "Pop punk", "Emo"],
          tracks: [
            { artist: "Albert Hammond Jr.", title: "Caught by My Shadow", official: "https://www.youtube.com/watch?v=Cq9Y3_J9tAw", officialType: "audio", live: "https://www.youtube.com/watch?v=Kqb61UdRVcM", liveType: "session" },
            { artist: "Albert Hammond Jr.", title: "Losing Touch", official: "https://www.youtube.com/watch?v=SgodtRzYHOU", officialType: "audio", live: "https://www.youtube.com/watch?v=oCZQ_AAxHXA", liveType: "session" },
            { artist: "Alkaline Trio", title: "We've Had Enough", official: "https://www.youtube.com/watch?v=jivhL27QdoY", officialType: "video", live: "https://www.youtube.com/watch?v=PNhLmO6-rME", liveType: "fan" },
            { artist: "Bad Suns", title: "Patience", official: "https://www.youtube.com/watch?v=g4pN7rp6x8Y", officialType: "audio", live: "https://www.youtube.com/watch?v=JqpN1ulmqdk", liveType: "fan" },
            { artist: "Band of Skulls", title: "You're Not Pretty but You Got It Goin' On", official: "https://www.youtube.com/watch?v=oQfYEDub0n0", officialType: "video", live: "https://www.youtube.com/watch?v=G-IBnxmE6Dw", liveType: "fan" },
            { artist: "Black Rebel Motorcycle Club", title: "Rival", official: "https://www.youtube.com/watch?v=HnaSaGpxgXQ", officialType: "video", live: "https://www.youtube.com/watch?v=1NE57r2MH4E", liveType: "session" },
            { artist: "blink-182", title: "Bored to Death", official: "https://www.youtube.com/watch?v=lic0oCDMfwk", officialType: "video", live: "https://www.youtube.com/watch?v=aZOx1Vu3hbc", liveType: "fan" },
            { artist: "Bombay Bicycle Club", title: "Carry Me", official: "https://www.youtube.com/watch?v=OZCfqhRgJ0Q", officialType: "video", live: "https://www.youtube.com/watch?v=HeaUqj9maZQ", liveType: "session" },
            { artist: "CRUISR", title: "All Over", official: "https://www.youtube.com/watch?v=ed1NybIVDNA", officialType: "video", live: "https://www.youtube.com/watch?v=pqzNTaTgRlg", liveType: "session" },
            { artist: "Frnkiero and the Cellabration", title: "Weighted", official: "https://www.youtube.com/watch?v=ahw1LR-dnG8", officialType: "video", live: "https://www.youtube.com/watch?v=ebhqpEUDPMw", liveType: "fan" },
            { artist: "Mayer Hawthorne", title: "Love Like That", official: "https://www.youtube.com/watch?v=SkHkVsmbJOo", officialType: "audio", live: "https://www.youtube.com/watch?v=nCJzXxupgj4", liveType: "session" },
            { artist: "MIAMIGO", title: "Hard to Love", official: "https://www.youtube.com/watch?v=alwt89iLTl8", officialType: "audio", live: "https://www.youtube.com/watch?v=W-TBybyfTTs", liveType: "pro" },
            { artist: "Saves the Day", title: "See You", official: "https://www.youtube.com/watch?v=JseklLoJJYA", officialType: "video", live: "https://www.youtube.com/watch?v=26amGNeGWaw", liveType: "fan" },
            { artist: "School of Seven Bells", title: "Ablaze", official: "https://www.youtube.com/watch?v=dPWJ0MreHeg", officialType: "video" },
            { artist: "The 1975", title: "The Sound", official: "https://www.youtube.com/watch?v=FSnAllHtG70", officialType: "video", live: "https://www.youtube.com/watch?v=oiDxn3QrSLM", liveType: "session" },
            { artist: "The A-Sides", title: "We're the Trees", official: "https://www.youtube.com/watch?v=65kJ3SacNCc", officialType: "video" },
            { artist: "The Get Up Kids", title: "Ten Minutes", official: "https://www.youtube.com/watch?v=gNgTeHYF9es", officialType: "video", live: "https://www.youtube.com/watch?v=OlWAr-yRgqY", liveType: "session" },
            { artist: "Thrice", title: "Blood on the Sand", official: "https://www.youtube.com/watch?v=SecJsEelf3c", officialType: "audio", live: "https://www.youtube.com/watch?v=lWv1mRbB2-c", liveType: "fan" },
            { artist: "WATERS", title: "What's Real", official: "https://www.youtube.com/watch?v=5ppFCxnfvkM", officialType: "audio", live: "https://www.youtube.com/watch?v=GyHj8vm2Ws4", liveType: "session" },
            { artist: "White Lies", title: "Come On", official: "https://www.youtube.com/watch?v=1tjFV8NhJbo", officialType: "audio", live: "https://www.youtube.com/watch?v=QhUiny2XwXk", liveType: "fan" }
          ]
        }
      ]
    },
    {
      id: "fh4",
      title: "Forza Horizon 4",
      year: 2018,
      setting: "Great Britain",
      color: "#2E9E6B",
      stations: [
        {
          id: "horizon-xs",
          name: "Horizon XS",
          tagline: "Hard rock, punk and alternative for the British countryside.",
          genres: ["Hard rock", "Punk", "Alternative"],
          tracks: [
            { artist: "At the Drive-In", title: "No Wolf Like the Present", official: "https://www.youtube.com/watch?v=mSnSryEO3Uo", officialType: "audio" },
            { artist: "Bass Drum of Death", title: "I Don't Wanna Know", official: "https://www.youtube.com/watch?v=k4C451MaYlE", officialType: "audio" },
            { artist: "Bat Fangs", title: "Turn It Up", official: "https://www.youtube.com/watch?v=-6mI_CSNvjg", officialType: "video", live: "https://www.youtube.com/watch?v=tAjAL2bpuhY", liveType: "session" },
            { artist: "Black Rebel Motorcycle Club", title: "Little Thing Gone Wild", official: "https://www.youtube.com/watch?v=eCh_JGmaA_8", officialType: "audio", live: "https://www.youtube.com/watch?v=bNIgABRBMts", liveType: "fan" },
            { artist: "Dommengang", title: "Pastel City", official: "https://www.youtube.com/watch?v=38VNGGmPkq0", officialType: "audio" },
            { artist: "Dorothy", title: "Down to the Bottom", official: "https://www.youtube.com/watch?v=obR-9gfmkQY", officialType: "video", live: "https://www.youtube.com/watch?v=0NE-ZD5fM7g", liveType: "pro" },
            { artist: "Eyes Set to Kill", title: "Die Trying", official: "https://www.youtube.com/watch?v=fjkXdKow0_s", officialType: "audio", live: "https://www.youtube.com/watch?v=uGkeCAI5PoE", liveType: "fan" },
            { artist: "Foo Fighters", title: "La Dee Da", official: "https://www.youtube.com/watch?v=COSQ8A8iSbw", officialType: "audio", live: "https://www.youtube.com/watch?v=4_tbs3SngJA", liveType: "fan" },
            { artist: "Greta Van Fleet", title: "Safari Song", official: "https://www.youtube.com/watch?v=1lfBC6S9qVM", officialType: "audio", live: "https://www.youtube.com/watch?v=zXdM1rqSlSQ", liveType: "session" },
            { artist: "Hot Snakes", title: "Six Wave Hold-Down", official: "https://www.youtube.com/watch?v=yrR50b7-OSQ", officialType: "audio", live: "https://www.youtube.com/watch?v=HRxZT8o1cNo", liveType: "session" },
            { artist: "I Prevail", title: "Rise", official: "https://www.youtube.com/watch?v=sTMiqk1fBmM", officialType: "audio", live: "https://www.youtube.com/watch?v=-deOL2LVAhU", liveType: "fan" },
            { artist: "Jack White", title: "Over and Over and Over", official: "https://www.youtube.com/watch?v=ShCRN3tFy80", officialType: "video", live: "https://www.youtube.com/watch?v=oQI_x-eQgEw", liveType: "tv" },
            { artist: "Pennywise", title: "Can't Be Ignored", official: "https://www.youtube.com/watch?v=kJFD2R_T6Ac", officialType: "audio" },
            { artist: "Queens of the Stone Age", title: "The Evil Has Landed", official: "https://www.youtube.com/watch?v=Exa0CzlCb3Y", officialType: "audio", live: "https://www.youtube.com/watch?v=0aoIHDa0Aaw", liveType: "session" },
            { artist: "Red Sun Rising", title: "Deathwish", official: "https://www.youtube.com/watch?v=0crY95eobHU", officialType: "video", live: "https://www.youtube.com/watch?v=gexah5I88xc", liveType: "session" },
            { artist: "Starset", title: "Satellite", official: "https://www.youtube.com/watch?v=fB4tJ_Ml9nw", officialType: "video", live: "https://www.youtube.com/watch?v=FonmUjYSyho", liveType: "tv" },
            { artist: "The Killers", title: "Run for Cover", official: "https://www.youtube.com/watch?v=uC1vjuK4ODM", officialType: "audio", live: "https://www.youtube.com/watch?v=bZngRE4XBU0", liveType: "fan" },
            { artist: "The Wonder Years", title: "Sister Cities", official: "https://www.youtube.com/watch?v=ccIyBeLEjGM", officialType: "video", live: "https://www.youtube.com/watch?v=Y5xzU3N93V0", liveType: "session" },
            { artist: "Underoath", title: "Rapture", official: "https://www.youtube.com/watch?v=wdqVP5Sqjo4", officialType: "audio", live: "https://www.youtube.com/watch?v=XZHngKKemH0", liveType: "session" },
            { artist: "WALK THE MOON", title: "Headphones", official: "https://www.youtube.com/watch?v=1y7giHbrvcc", officialType: "video", live: "https://www.youtube.com/watch?v=-tyATcaGIIc", liveType: "tv" }
          ]
        }
      ]
    },
    {
      id: "fh5",
      title: "Forza Horizon 5",
      year: 2021,
      setting: "Mexico",
      color: "#E6007E",
      stations: [
        {
          id: "horizon-xs",
          name: "Horizon XS",
          host: "Angélica Garcia",
          tagline: "A custom mix of rock 'n' roll's greatest hits and regional favorites.",
          genres: ["Rock", "Alternative", "Punk"],
          tracks: [
            { artist: "Angélica Garcia", title: "Karma the Knife", official: "https://www.youtube.com/watch?v=MONmVK5lc78", officialType: "audio" },
            { artist: "Arkells", title: "You Can Get It (feat. K.Flay)", official: "https://www.youtube.com/watch?v=2ENinfP4R3Y", officialType: "video", live: "https://www.youtube.com/watch?v=cRqDiiWUclw", liveType: "pro" },
            { artist: "Bite the Buffalo", title: "Getaway", official: "https://www.youtube.com/watch?v=YbrzCx4BaOg", officialType: "video" },
            { artist: "Blah Blah Blahs", title: "Do It Better", official: "https://www.youtube.com/watch?v=5GN50oH49kY", officialType: "audio" },
            { artist: "Bring Me the Horizon", title: "Teardrops", official: "https://www.youtube.com/watch?v=L5uV3gmOH9g", officialType: "video", live: "https://www.youtube.com/watch?v=gytIkPYXVA4", liveType: "pro" },
            { artist: "Death Valley Girls", title: "10 Day Miracle Challenge", live: "https://www.youtube.com/watch?v=7y-UgA3oAAE", liveType: "fan", official: "https://www.youtube.com/watch?v=Xi_qFUs8m3I", officialType: "audio" },
            { artist: "DIIV", title: "Under the Sun", official: "https://www.youtube.com/watch?v=zKbqyuaXolg", officialType: "audio", live: "https://www.youtube.com/watch?v=7EOVMYn9uhA", liveType: "session" },
            { artist: "El Shirota", title: "La Ciudad", live: "https://www.youtube.com/watch?v=eSPj-izD8ng", liveType: "session", official: "https://www.youtube.com/watch?v=VY18iOG2HqE", officialType: "video" },
            { artist: "Foo Fighters", title: "Holding Poison", official: "https://www.youtube.com/watch?v=1x9_1QC5fTY", officialType: "visualizer" },
            { artist: "Foo Fighters", title: "No Son of Mine", official: "https://www.youtube.com/watch?v=xAVfdoovrIU", officialType: "video", live: "https://www.youtube.com/watch?v=gbUStYJdMC4", liveType: "fan" },
            { artist: "Maxband", title: "Unsaid", official: "https://www.youtube.com/watch?v=_0AkbTgi1iA", officialType: "audio" },
            { artist: "Melted Brains", title: "I Wanna Connect" },
            { artist: "Nothing but Thieves", title: "Unperson", official: "https://www.youtube.com/watch?v=dO-V7AGFASo", officialType: "video", live: "https://www.youtube.com/watch?v=3ECl21qw54g", liveType: "pro" },
            { artist: "Oscar Lang", title: "Antidote to Being Bored", official: "https://www.youtube.com/watch?v=463HBIYpzqU", officialType: "video" },
            { artist: "Plague Vendor", title: "Live More" },
            { artist: "Plague Vendor", title: "New Comedown", official: "https://www.youtube.com/watch?v=Rti4NxhEj9w", officialType: "video", live: "https://www.youtube.com/watch?v=9238ElosddA", liveType: "fan" },
            { artist: "Royal Blood", title: "Trouble's Coming", official: "https://www.youtube.com/watch?v=uURsMKMloM8", officialType: "video", live: "https://www.youtube.com/watch?v=XLmx2xLuKCc", liveType: "tv" },
            { artist: "SOFI TUKKER", title: "Freak", official: "https://www.youtube.com/watch?v=6xweH20MQiE", officialType: "audio" },
            { artist: "Technicolor Fabrics", title: "Mejor Que Nadie", official: "https://www.youtube.com/watch?v=J1o4hvNE6uA", officialType: "video" },
            { artist: "The Killers", title: "Caution", official: "https://www.youtube.com/watch?v=WrpBgN_iUnA", officialType: "video", live: "https://www.youtube.com/watch?v=ZT4h9M49s40", liveType: "tv" },
            { artist: "The Struts & Tom Morello", title: "Wild Child", official: "https://www.youtube.com/watch?v=8KsBf-iXc0Y", officialType: "audio", live: "https://www.youtube.com/watch?v=2COZJYApJXE", liveType: "fan" },
            { artist: "Wolf Alice", title: "Smile", official: "https://www.youtube.com/watch?v=NV39h7GHDYs", officialType: "video", live: "https://www.youtube.com/watch?v=1gEBVbHJpZo", liveType: "pro" }
          ]
        },
        {
          id: "epitaph-records",
          name: "Epitaph Records",
          host: "Chad Tepper",
          tagline: "Punk, pop punk and hardcore — the Epitaph station returns (added in Series 19).",
          genres: ["Punk", "Pop punk", "Hardcore"],
          tracks: [
            { artist: "Alkaline Trio", title: "Blackbird", official: "https://www.youtube.com/watch?v=1yJzptD4oVA", officialType: "video", live: "https://www.youtube.com/watch?v=70UIZdjeAHU", liveType: "session" },
            { artist: "Architects", title: "When We Were Young", official: "https://www.youtube.com/watch?v=1yOaxGQ-CYI", officialType: "video", live: "https://www.youtube.com/watch?v=e75JiBLEtqU", liveType: "pro" },
            { artist: "Bad Religion", title: "New Dark Ages", official: "https://www.youtube.com/watch?v=9rlvzPInUrc", officialType: "video", live: "https://www.youtube.com/watch?v=_1BZ3SVUejM", liveType: "tv" },
            { artist: "Chad Tepper", title: "Never Moving On", official: "https://www.youtube.com/watch?v=fhKBvhGPLxQ", officialType: "video" },
            { artist: "Early Eyes", title: "Revel Berry", live: "https://www.youtube.com/watch?v=-8Woi3koU8U", liveType: "pro" },
            { artist: "The Ghost Inside", title: "Aftermath", official: "https://www.youtube.com/watch?v=obabWJUdncc", officialType: "video", live: "https://www.youtube.com/watch?v=ehaGJXJk98U", liveType: "fan" },
            { artist: "Joyce Manor", title: "Gotta Let It Go", official: "https://www.youtube.com/watch?v=5D7s5glNk8k", officialType: "video", live: "https://www.youtube.com/watch?v=pzelFo-OfQE", liveType: "fan" },
            { artist: "The Linda Lindas", title: "Growing Up", official: "https://www.youtube.com/watch?v=Wm1Sew7lAG4", officialType: "video", live: "https://www.youtube.com/watch?v=DYRlXq2S4TI", liveType: "session" },
            { artist: "The Linda Lindas", title: "Oh!", official: "https://www.youtube.com/watch?v=wF-1IIs9_5U", officialType: "video", live: "https://www.youtube.com/watch?v=b1V98NxwxVM", liveType: "session" },
            { artist: "Magnolia Park", title: "Feel Something (feat. Derek Sanders)", official: "https://www.youtube.com/watch?v=Om458AUy_OQ", officialType: "video", live: "https://www.youtube.com/watch?v=dk-vFixwXLg", liveType: "session" },
            { artist: "Mannequin Pussy", title: "Control", official: "https://www.youtube.com/watch?v=9C_tFlCkWVM", officialType: "video", live: "https://www.youtube.com/watch?v=CHfkAWHcqQ4", liveType: "fan" },
            { artist: "The Offspring", title: "It'll Be a Long Time", official: "https://www.youtube.com/watch?v=LpEYuVpJUVI", officialType: "audio", live: "https://www.youtube.com/watch?v=S9uJl1JcYr4", liveType: "pro" },
            { artist: "Pennywise", title: "Land of the Free?", official: "https://www.youtube.com/watch?v=OHu42frzmys", officialType: "audio" },
            { artist: "PTS!", title: "Bittersweet Teeth", official: "https://www.youtube.com/watch?v=cdRDC13KeQo", officialType: "video" },
            { artist: "Thick", title: "Happiness", official: "https://www.youtube.com/watch?v=KAXJDUcKgKI", officialType: "video", live: "https://www.youtube.com/watch?v=tCuQ2_nXXVM", liveType: "session" }
          ]
        }
      ]
    },
    {
      id: "fh6",
      title: "Forza Horizon 6",
      year: 2026,
      setting: "Japan",
      color: "#D7263D",
      stations: [
        {
          id: "horizon-xs",
          name: "Horizon XS",
          tagline: "Rock, metal and punk for the moshers — with a strong J-rock lineup.",
          genres: ["Metal", "Rock", "J-rock"],
          tracks: [
            { artist: "A Day to Remember", title: "Bad Blood", official: "https://www.youtube.com/watch?v=goARHpTbRas", officialType: "audio", live: "https://www.youtube.com/watch?v=l8rMaZZbSZ0", liveType: "fan" },
            { artist: "BABYMETAL", title: "White Flame (白炎)", official: "https://www.youtube.com/watch?v=9wvYi5dXU3Y", officialType: "audio" },
            { artist: "Sleep Theory", title: "III", official: "https://www.youtube.com/watch?v=71slUkcCMpY", officialType: "video" },
            { artist: "Rise Against", title: "I Want It All", official: "https://www.youtube.com/watch?v=9msDasgJ-XY", officialType: "video", live: "https://www.youtube.com/watch?v=KyR2hhYkxs4", liveType: "tv" },
            { artist: "Biffy Clyro", title: "Friendshipping", official: "https://www.youtube.com/watch?v=qt6dqfkIpGI", officialType: "audio", live: "https://www.youtube.com/watch?v=S-xfMi-v82g", liveType: "fan" },
            { artist: "Coheed and Cambria", title: "Searching for Tomorrow", official: "https://www.youtube.com/watch?v=hDsYGLbmadg", officialType: "video", live: "https://www.youtube.com/watch?v=AGiezlQgTg8", liveType: "fan" },
            { artist: "Linkin Park", title: "Up From the Bottom", official: "https://www.youtube.com/watch?v=97Mj6pXYMd8", officialType: "video", live: "https://www.youtube.com/watch?v=Q5nFwHcboTs", liveType: "pro" },
            { artist: "PassCode", title: "Ray", official: "https://www.youtube.com/watch?v=bI0_Hx__dFU", officialType: "video", live:"https://www.youtube.com/watch?v=ypzM183YnEg", liveType: "session" },
            { artist: "Poppy", title: "new way out", official: "https://www.youtube.com/watch?v=OqVNYcaS-3E", officialType: "visualizer", live: "https://www.youtube.com/watch?v=VnIwvi0YUrM", liveType: "pro" },
            { artist: "Snõõper", title: "Worldwide", official: "https://www.youtube.com/watch?v=MN4FTCL8PMQ", officialType: "video", live: "https://www.youtube.com/watch?v=BQ0KLm_LdmI", liveType: "session" },
            { artist: "Spiritbox", title: "Keep Sweet", official: "https://www.youtube.com/watch?v=usgxyuMo0MA", officialType: "visualizer", live: "https://www.youtube.com/watch?v=808tkeJb3rg", liveType: "session" },
            { artist: "Turnstile", title: "SOLE", official: "https://www.youtube.com/watch?v=2iry0ssksZg", officialType: "audio", live: "https://www.youtube.com/watch?v=s5OneesvqG0", liveType: "fan" },
            { artist: "BABYMETAL", title: "Gimme Chocolate!!", official: "https://www.youtube.com/watch?v=WIKqgE4BwAY", officialType: "video", live: "https://www.youtube.com/watch?v=sEU-fjuycw8", liveType: "pro" },
            { artist: "Spiritual Cramp", title: "Go Back Home", official: "https://www.youtube.com/watch?v=EdgonEpdb2o", officialType: "audio" },
            { artist: "Ecca Vandal", title: "VERTICAL WORLDS", official: "https://www.youtube.com/watch?v=WTMV9ywRYko", officialType: "video", live: "https://www.youtube.com/watch?v=OaBJ9JopXrk", liveType: "fan" },
            { artist: "BAND-MAID", title: "What is justice?", official: "https://www.youtube.com/watch?v=3kMIh0_Wkpk", officialType: "video", live: "https://www.youtube.com/watch?v=rG8cfEJeNMw", liveType: "pro" },
            { artist: "Coach Party", title: "Disco Dream", official: "https://www.youtube.com/watch?v=fhZqjvdchjY", officialType: "video", live: "https://www.youtube.com/watch?v=pfF96pFoFSo", liveType: "pro" },
            { artist: "GOKUMON (UchikubiGokumonDoukoukai)", title: "hatarakitakunai", official: "https://www.youtube.com/watch?v=GR-mLGV0X1I", officialType: "video", live: "https://www.youtube.com/watch?v=eBqOqq0dF9U", liveType: "pro" },
            { artist: "Pendulum & AWOLNATION", title: "Guiding Lights", official: "https://www.youtube.com/watch?v=Mgh7JJFO5sc", officialType: "lyric", live: "https://www.youtube.com/watch?v=GA2dxCtAgCk", liveType: "pro" },
            { artist: "South Arcade", title: "Drive Myself Home", official: "https://www.youtube.com/watch?v=wcR_Wp94E40", officialType: "video", live: "https://www.youtube.com/watch?v=gwPChgm_FpE", liveType: "fan" },
            { artist: "Teen Mortgage", title: "Disappear", official: "https://www.youtube.com/watch?v=yy72oWl5KJU", officialType: "lyric" },
            { artist: "Bearings", title: "Comfort Company", official: "https://www.youtube.com/watch?v=90MV8Sen6ds", officialType: "video" },
            { artist: "Death Lens", title: "Power", official: "https://www.youtube.com/watch?v=APC4zAsYvcs", officialType: "video" },
            { artist: "ONE OK ROCK", title: "Dystopia (Japanese Version)", official: "https://www.youtube.com/watch?v=cIOntvhfJx4", officialType: "video", live: "https://www.youtube.com/watch?v=TLfW6gzf5og", liveType: "pro" },
            { artist: "Witch Post", title: "The Wolf", official: "https://www.youtube.com/watch?v=1ocDSbjWdBY", officialType: "video", live: "https://www.youtube.com/watch?v=_cwe3BvlJpY", liveType: "pro" }
          ]
        }
      ]
    }
  ]
};
