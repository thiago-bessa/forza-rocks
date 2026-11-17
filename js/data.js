/*
 * Forza Rocks — station data
 *
 * Each track accepts two optional direct links:
 *   official: "https://www.youtube.com/watch?v=..."   (official music video)
 *   live:     "https://www.youtube.com/watch?v=..."   (live performance)
 * When a link is missing, the page falls back to a YouTube search for it.
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
            { artist: "Arctic Monkeys", title: "R U Mine?" },
            { artist: "The Black Keys", title: "Lonely Boy" },
            { artist: "Four Year Strong", title: "The Infected" },
            { artist: "Howler", title: "Back of Your Neck" },
            { artist: "LCD Soundsystem", title: "Give It Up" },
            { artist: "Lostprophets", title: "Bring 'Em Down" },
            { artist: "Lostprophets", title: "We Bring an Arsenal" },
            { artist: "Mona", title: "Teenager" },
            { artist: "Neon Trees", title: "Animal" },
            { artist: "Pulled Apart by Horses", title: "Wildfire, Smoke & Doom" },
            { artist: "Silversun Pickups", title: "Lazy Eye" },
            { artist: "The Duke Spirit", title: "Surrender" },
            { artist: "The Enemy", title: "Away from Here" },
            { artist: "The Enemy", title: "Had Enough" },
            { artist: "The Hives", title: "Hate to Say I Told You So" },
            { artist: "The Stone Roses", title: "She Bangs the Drums" },
            { artist: "The Subways", title: "Rock & Roll Queen" },
            { artist: "TOY", title: "Motoring" },
            { artist: "Wavves", title: "Bug" },
            { artist: "White Lies", title: "Farewell to the Fairground" },
            { artist: "You Me at Six", title: "Bite My Tongue (feat. Oli Sykes)" },
            { artist: "Yuck", title: "Get Away" }
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
            { artist: "Band of Skulls", title: "Hoochie Coochie" },
            { artist: "Bear Hands", title: "Peacekeeper" },
            { artist: "Cage the Elephant", title: "Take It or Leave It" },
            { artist: "Childhood", title: "Solemn Skies" },
            { artist: "Circa Waves", title: "Get Away" },
            { artist: "GRMLN", title: "Teenage Rhythm" },
            { artist: "Jane's Addiction", title: "Just Because" },
            { artist: "Miles Kane", title: "Come Closer" },
            { artist: "Papa", title: "Put Me to Work" },
            { artist: "Pixies", title: "Debaser" },
            { artist: "Royal Blood", title: "Out of the Black" },
            { artist: "Skaters", title: "This Much I Care" },
            { artist: "Temples", title: "Mesmerise" },
            { artist: "The Bohicas", title: "XXX" },
            { artist: "The Clash", title: "Train in Vain" },
            { artist: "The War on Drugs", title: "Red Eyes" },
            { artist: "Thee Oh Sees", title: "I Come from the Mountain" },
            { artist: "Tom Williams & The Boat", title: "All Day" },
            { artist: "TOY", title: "It's Been So Long" },
            { artist: "Wild Smiles", title: "Fool for You" }
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
            { artist: "A Day to Remember", title: "Naivety" },
            { artist: "Avion Roe", title: "This Loneliness" },
            { artist: "Bad Religion", title: "Anxiety" },
            { artist: "Beautiful Bodies", title: "She's a Blast" },
            { artist: "Bouncing Souls", title: "The Gold Song" },
            { artist: "Descendents", title: "Spineless and Scarlet Red" },
            { artist: "Every Time I Die", title: "It Remembers" },
            { artist: "Joyce Manor", title: "Make Me Dumb" },
            { artist: "letlive.", title: "Elephant" },
            { artist: "Obey the Brave", title: "Raise Your Voice" },
            { artist: "The Offspring", title: "Get It Right" },
            { artist: "Pennywise", title: "Greed" },
            { artist: "Plague Vendor", title: "ISUA" },
            { artist: "Rancid", title: "Fall Back Down" },
            { artist: "Saosin", title: "Racing Toward a Red Light" },
            { artist: "Sleeping with Sirens", title: "Gold" },
            { artist: "Touché Amoré", title: "Palm Dreams" },
            { artist: "Transplants", title: "Come Around" }
          ]
        },
        {
          id: "vagrant-records",
          name: "Vagrant Records",
          tagline: "Indie, hard rock, punk and emo hits from the LA-based independent label.",
          genres: ["Alternative", "Pop punk", "Emo"],
          tracks: [
            { artist: "Albert Hammond Jr.", title: "Caught by My Shadow" },
            { artist: "Albert Hammond Jr.", title: "Losing Touch" },
            { artist: "Alkaline Trio", title: "We've Had Enough" },
            { artist: "Bad Suns", title: "Patience" },
            { artist: "Band of Skulls", title: "You're Not Pretty but You Got It Goin' On" },
            { artist: "Black Rebel Motorcycle Club", title: "Rival" },
            { artist: "blink-182", title: "Bored to Death" },
            { artist: "Bombay Bicycle Club", title: "Carry Me" },
            { artist: "CRUISR", title: "All Over" },
            { artist: "Frnkiero and the Cellabration", title: "Weighted" },
            { artist: "Mayer Hawthorne", title: "Love Like That" },
            { artist: "MIAMIGO", title: "Hard to Love" },
            { artist: "Saves the Day", title: "See You" },
            { artist: "School of Seven Bells", title: "Ablaze" },
            { artist: "The 1975", title: "The Sound" },
            { artist: "The A-Sides", title: "We're the Trees" },
            { artist: "The Get Up Kids", title: "Ten Minutes" },
            { artist: "Thrice", title: "Blood on the Sand" },
            { artist: "WATERS", title: "What's Real" },
            { artist: "White Lies", title: "Come On" }
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
            { artist: "At the Drive-In", title: "No Wolf Like the Present" },
            { artist: "Bass Drum of Death", title: "I Don't Wanna Know" },
            { artist: "Bat Fangs", title: "Turn It Up" },
            { artist: "Black Rebel Motorcycle Club", title: "Little Thing Gone Wild" },
            { artist: "Dommengang", title: "Pastel City" },
            { artist: "Dorothy", title: "Down to the Bottom" },
            { artist: "Eyes Set to Kill", title: "Die Trying" },
            { artist: "Foo Fighters", title: "La Dee Da" },
            { artist: "Greta Van Fleet", title: "Safari Song" },
            { artist: "Hot Snakes", title: "Six Wave Hold-Down" },
            { artist: "I Prevail", title: "Rise" },
            { artist: "Jack White", title: "Over and Over and Over" },
            { artist: "Pennywise", title: "Can't Be Ignored" },
            { artist: "Queens of the Stone Age", title: "The Evil Has Landed" },
            { artist: "Red Sun Rising", title: "Deathwish" },
            { artist: "Starset", title: "Satellite" },
            { artist: "The Killers", title: "Run for Cover" },
            { artist: "The Wonder Years", title: "Sister Cities" },
            { artist: "Underoath", title: "Rapture" },
            { artist: "WALK THE MOON", title: "Headphones" }
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
            { artist: "Angélica Garcia", title: "Karma the Knife" },
            { artist: "Arkells", title: "You Can Get It (feat. K.Flay)" },
            { artist: "Bite the Buffalo", title: "Getaway" },
            { artist: "Blah Blah Blahs", title: "Do It Better" },
            { artist: "Bring Me the Horizon", title: "Teardrops" },
            { artist: "Death Valley Girls", title: "10 Day Miracle Challenge" },
            { artist: "DIIV", title: "Under the Sun" },
            { artist: "El Shirota", title: "La Ciudad" },
            { artist: "Foo Fighters", title: "Holding Poison" },
            { artist: "Foo Fighters", title: "No Son of Mine" },
            { artist: "Maxband", title: "Unsaid" },
            { artist: "Melted Brains", title: "I Wanna Connect" },
            { artist: "Nothing but Thieves", title: "Unperson" },
            { artist: "Oscar Lang", title: "Antidote to Being Bored" },
            { artist: "Plague Vendor", title: "Live More" },
            { artist: "Plague Vendor", title: "New Comedown" },
            { artist: "Royal Blood", title: "Trouble's Coming" },
            { artist: "SOFI TUKKER", title: "Freak" },
            { artist: "Technicolor Fabrics", title: "Mejor Que Nadie" },
            { artist: "The Killers", title: "Caution" },
            { artist: "The Struts & Tom Morello", title: "Wild Child" },
            { artist: "Wolf Alice", title: "Smile" }
          ]
        },
        {
          id: "epitaph-records",
          name: "Epitaph Records",
          host: "Chad Tepper",
          tagline: "Punk, pop punk and hardcore — the Epitaph station returns (added in Series 19).",
          genres: ["Punk", "Pop punk", "Hardcore"],
          tracks: [
            { artist: "Alkaline Trio", title: "Blackbird" },
            { artist: "Architects", title: "When We Were Young" },
            { artist: "Bad Religion", title: "New Dark Ages" },
            { artist: "Chad Tepper", title: "Never Moving On" },
            { artist: "Early Eyes", title: "Revel Berry" },
            { artist: "The Ghost Inside", title: "Aftermath" },
            { artist: "Joyce Manor", title: "Gotta Let It Go" },
            { artist: "The Linda Lindas", title: "Growing Up" },
            { artist: "The Linda Lindas", title: "Oh!" },
            { artist: "Magnolia Park", title: "Feel Something (feat. Derek Sanders)" },
            { artist: "Mannequin Pussy", title: "Control" },
            { artist: "The Offspring", title: "It'll Be a Long Time" },
            { artist: "Pennywise", title: "Land of the Free?" },
            { artist: "PTS!", title: "Bittersweet Teeth" },
            { artist: "Thick", title: "Happiness" }
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
            { artist: "BABYMETAL", title: "White Flame (白炎)", official: "https://www.youtube.com/watch?v=CPu5Et4bpSc", officialType: "audio" },
            { artist: "Sleep Theory", title: "III", official: "https://www.youtube.com/watch?v=71slUkcCMpY", officialType: "video" },
            { artist: "Rise Against", title: "I Want It All", official: "https://www.youtube.com/watch?v=9msDasgJ-XY", officialType: "video", live: "https://www.youtube.com/watch?v=KyR2hhYkxs4", liveType: "tv" },
            { artist: "Biffy Clyro", title: "Friendshipping", official: "https://www.youtube.com/watch?v=qt6dqfkIpGI", officialType: "audio", live: "https://www.youtube.com/watch?v=S-xfMi-v82g", liveType: "fan" },
            { artist: "Coheed and Cambria", title: "Searching for Tomorrow", official: "https://www.youtube.com/watch?v=hDsYGLbmadg", officialType: "video", live: "https://www.youtube.com/watch?v=AGiezlQgTg8", liveType: "fan" },
            { artist: "Linkin Park", title: "Up From the Bottom", official: "https://www.youtube.com/watch?v=97Mj6pXYMd8", officialType: "video", live: "https://www.youtube.com/watch?v=Q5nFwHcboTs", liveType: "pro" },
            { artist: "PassCode", title: "Ray", live: "https://www.youtube.com/watch?v=ypzM183YnEg", liveType: "session" },
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
