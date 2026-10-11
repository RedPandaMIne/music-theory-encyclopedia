const articles = [
  {id:"notes",title:"Notes & Pitch",category:"Fundamentals",level:"Beginner",summary:"The building blocks of music: pitch names, accidentals, enharmonic spellings, and how notes are written.",definition:"A note represents a musical sound. Its name identifies a pitch, while its position on a staff shows where it sits in musical notation.",details:["The seven letter names are A, B, C, D, E, F, and G.","A sharp raises a pitch by a semitone; a flat lowers it by a semitone.","Enharmonic notes can sound the same in equal temperament but be written differently, such as C-sharp and D-flat."],example:"C · D · E · F · G · A · B · C",related:["intervals","staff","major-scale"]},
  {id:"rhythm",title:"Rhythm & Meter",category:"Rhythm",level:"Beginner",summary:"Understand beats, note values, time signatures, meter, and how rhythm shapes musical motion.",definition:"Rhythm is the organization of sounds and silences in time. Meter groups beats into recurring patterns of strong and weak pulses.",details:["A time signature tells you how beats are grouped and which note value represents a beat.","Simple meter commonly groups beats in twos or threes; compound meter divides each beat into three parts.","Syncopation emphasizes normally weak beats or offbeats."],example:"4/4: ONE two THREE four",related:["polyrhythm","syncopation","musical-form"]},
  {id:"major-scale",title:"The Major Scale",category:"Scales & Modes",level:"Beginner",summary:"A seven-note scale built from a specific pattern of whole steps and half steps.",definition:"The major scale is a seven-note diatonic scale. Its characteristic step pattern is whole, whole, half, whole, whole, whole, half.",details:["In C major, the notes are C, D, E, F, G, A, B, C.","The half steps occur between scale degrees 3–4 and 7–8.","Major scales provide the pitch collection for many melodies and harmonies."],example:"C – D – E – F – G – A – B – C",related:["modes","intervals","triads"]},
  {id:"modes",title:"Modes",category:"Scales & Modes",level:"Intermediate",summary:"Seven diatonic pitch patterns with distinct interval structures and musical characters.",definition:"A mode is a type of scale. The seven modes related to the major scale are Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, and Locrian.",details:["Ionian is the same interval pattern as the major scale; Aeolian is the natural minor scale.","Dorian has a minor third and a major sixth; Mixolydian has a major third and a minor seventh.","Modes are best understood by comparing each mode's intervals to its tonic."],example:"C Dorian: C – D – E♭ – F – G – A – B♭ – C",related:["major-scale","intervals","tonality"]},
  {id:"intervals",title:"Intervals",category:"Fundamentals",level:"Beginner",summary:"The distance in pitch between two notes, measured by number and quality.",definition:"An interval describes the pitch distance between two notes. Its number comes from the note names; its quality describes the exact size.",details:["Intervals may be perfect, major, minor, augmented, or diminished.","A semitone is the smallest standard interval in 12-tone equal temperament.","Intervals can be melodic (notes played in sequence) or harmonic (notes sounding together)."],example:"C → E = major third · C → G = perfect fifth",related:["major-scale","triads","seventh-chords"]},
  {id:"triads",title:"Triads",category:"Harmony",level:"Beginner",summary:"Three-note chords built by stacking thirds: major, minor, diminished, and augmented.",definition:"A triad is a three-note chord made from a root, a third, and a fifth. The quality depends on the sizes of those intervals.",details:["Major triad: major third + perfect fifth above the root.","Minor triad: minor third + perfect fifth.","Diminished triad: minor third + diminished fifth; augmented triad: major third + augmented fifth."],example:"C major: C – E – G · A minor: A – C – E",related:["intervals","seventh-chords","cadences"]},
  {id:"seventh-chords",title:"Seventh Chords",category:"Harmony",level:"Intermediate",summary:"Four-note chords that add a seventh above a triad, expanding harmonic color and tension.",definition:"A seventh chord adds a seventh interval above the root to a triad, usually by stacking one more third.",details:["Cmaj7: C–E–G–B (major seventh).","C7: C–E–G–B♭ (dominant seventh).","Cm7: C–E♭–G–B♭ (minor seventh)."],example:"Cmaj7 → C · E · G · B",related:["triads","cadences","voice-leading"]},
  {id:"cadences",title:"Cadences",category:"Harmony",level:"Intermediate",summary:"Harmonic and melodic patterns that create closure, pause, or expectation at phrase endings.",definition:"A cadence is a progression of chords, often at the end of a phrase, that helps communicate whether the music feels finished, paused, or redirected.",details:["Authentic cadence: V–I, often strongly conclusive.","Half cadence: ends on V, creating a sense of continuation.","Plagal cadence: IV–I; deceptive cadence often uses V–vi instead of V–I in major."],example:"In C major: G7 → C = a strong authentic cadence",related:["triads","seventh-chords","tonality"]},
  {id:"tonality",title:"Tonality",category:"Harmony",level:"Intermediate",summary:"A system in which pitches and chords relate to a central note or key, called the tonic.",definition:"Tonality organizes musical pitches around a tonal center. Chords can have different functions depending on how they relate to that center.",details:["The tonic feels like a point of rest or home.","Dominant harmony often creates a pull toward the tonic.","Modulation is a change from one key or tonal center to another."],example:"In C major: C (tonic) · F (predominant) · G (dominant)",related:["modes","cadences","seventh-chords"]},
  {id:"counterpoint",title:"Counterpoint",category:"Composition",level:"Advanced",summary:"The craft of combining independent melodic lines so they work together harmonically.",definition:"Counterpoint is the relationship between distinct melodic lines sounding at the same time. Each line should have its own shape while contributing to the whole texture.",details:["A melody should be singable and have a clear contour.","Consonance and dissonance are managed to balance stability and motion.","Species counterpoint is a traditional learning system that introduces increasingly complex note-against-note relationships."],example:"Two independent melodies moving together without simply doubling one another.",related:["voice-leading","nonharmonic-tones","musical-form"]},
  {id:"polyrhythm",title:"Polyrhythm",category:"Rhythm",level:"Advanced",summary:"Two or more contrasting rhythmic patterns happening at the same time.",definition:"A polyrhythm layers rhythmic patterns with different subdivisions or groupings, creating a combined rhythmic texture.",details:["A common example is three evenly spaced notes against two evenly spaced notes in the same span of time.","Polyrhythm differs from polymeter, which uses different meters or recurring beat groupings at once.","Slowly counting each pattern separately can help you hear how they align."],example:"3 against 2: three equal pulses played across the same duration as two equal pulses.",related:["rhythm","syncopation","musical-form"]},
  {id:"nonharmonic-tones",title:"Nonharmonic Tones",category:"Harmony",level:"Advanced",summary:"Melodic notes that are not part of the chord sounding underneath them.",definition:"A nonharmonic tone (also called a non-chord tone) is a note that does not belong to the current harmony but adds melodic movement, tension, or decoration.",details:["A passing tone fills the gap between two chord tones by step.","A neighbor tone moves away from a chord tone by step and returns.","Suspensions are prepared, held into a new harmony, and then resolved, usually by step."],example:"Over a C chord: C – D – E, where D can act as a passing tone.",related:["counterpoint","voice-leading","triads"]},
  {id:"musical-form",title:"Musical Form",category:"Composition",level:"Intermediate",summary:"The larger-scale organization of musical ideas into phrases, sections, and complete works.",definition:"Musical form describes how a composition organizes and revisits its ideas over time.",details:["Binary form has two main sections, often labeled A–B.","Ternary form follows an A–B–A design, returning to the opening section.","Rondo form alternates a recurring main theme with contrasting episodes."],example:"Ternary form: A (opening idea) → B (contrast) → A (return)",related:["counterpoint","rhythm","tonality"]},
  {id:"voice-leading",title:"Voice Leading",category:"Composition",level:"Intermediate",summary:"How individual notes move from one chord to the next across musical parts or voices.",definition:"Voice leading is the way individual melodic lines move between chords. Smooth voice leading often keeps common tones and moves other notes by small intervals.",details:["Keep common tones in the same voice when it suits the style.","Stepwise motion often creates a connected sound.","Traditional four-part writing has conventions such as avoiding parallel perfect fifths and octaves."],example:"C major (C–E–G) → F major (C–F–A): C can stay while E moves to F and G moves to A.",related:["counterpoint","seventh-chords","nonharmonic-tones"]},
  {id:"baroque-period",title:"The Baroque Period",category:"Music History",level:"History",summary:"Explore the era of elaborate ornamentation, basso continuo, and the rise of the concerto and opera.",definition:"The Baroque period in Western art music is usually dated from around 1600 to 1750. Composers often used strong contrasts, ornamentation, basso continuo, and intricate counterpoint.",details:["Johann Sebastian Bach, George Frideric Handel, and Antonio Vivaldi are major Baroque composers.","The concerto grosso and solo concerto became important instrumental forms.","Opera developed into an influential dramatic genre, combining music, acting, and stage design."],example:"Listen for: continuo bass lines, sequences, ornamentation, and independent melodic lines.",related:["bach","vivaldi","counterpoint"]},
  {id:"classical-period",title:"The Classical Period",category:"Music History",level:"History",summary:"Learn about balanced phrases, clear forms, symphonies, and the string quartet.",definition:"The Classical period is commonly dated from about 1750 to 1820. Many composers emphasized clarity, balance, formal structure, and themes that could be developed and transformed.",details:["Wolfgang Amadeus Mozart and Joseph Haydn helped shape Classical style.","The symphony, concerto, sonata, and string quartet became central genres.","Ludwig van Beethoven's work bridged Classical traditions and Romantic expression."],example:"Listen for: clear melodies, balanced phrases, and sonata form.",related:["mozart","haydn","beethoven"]},
  {id:"romantic-period",title:"The Romantic Period",category:"Music History",level:"History",summary:"Discover music that emphasizes expression, imagination, color, and dramatic storytelling.",definition:"The Romantic period, broadly spanning the 19th century, saw composers expand musical expression, orchestral color, harmony, and the relationship between music and literature or national identity.",details:["Frédéric Chopin developed expressive and technically imaginative piano music.","Pyotr Ilyich Tchaikovsky became known for ballets, symphonies, and concertos.","Composers often explored vivid orchestration, expanded forms, and strong emotional contrasts."],example:"Listen for: expressive rubato, rich orchestration, and dramatic dynamic changes.",related:["chopin","tchaikovsky","beethoven"]},
  {id:"modern-period",title:"Modern & Contemporary Music",category:"Music History",level:"History",summary:"Follow the many directions music took from the late 19th century through today.",definition:"Modern and contemporary music includes many different movements rather than one single style. Composers experimented with harmony, rhythm, timbre, form, technology, and musical traditions from around the world.",details:["Claude Debussy explored new harmonic colors and textures.","Igor Stravinsky became known for rhythmic energy and changing musical styles.","Later composers explored serialism, minimalism, electronic music, and new approaches to sound."],example:"Listen for: unusual harmonies, changing meters, new timbres, or repeated patterns.",related:["debussy","stravinsky","tonality"]},
  {id:"bach",title:"Johann Sebastian Bach",category:"Music History",level:"Composer profile",summary:"A Baroque master known for counterpoint, fugues, cantatas, and intricate keyboard music.",definition:"Johann Sebastian Bach (1685–1750) was a German composer and musician whose works became central to the study and performance of Western classical music.",details:["His works include the Brandenburg Concertos, the Well-Tempered Clavier, and the Mass in B minor.","Bach's music is admired for its counterpoint and the way independent melodic lines fit together.","He worked in churches and courts and composed for keyboard, orchestra, choir, and solo instruments."],example:"Explore: The Well-Tempered Clavier, Brandenburg Concertos, or a fugue.",related:["baroque-period","counterpoint","tonality"]},
  {id:"vivaldi",title:"Antonio Vivaldi",category:"Music History",level:"Composer profile",summary:"An Italian Baroque composer famous for energetic concertos, including The Four Seasons.",definition:"Antonio Vivaldi (1678–1741) was an Italian composer, violinist, and teacher who helped shape the solo concerto during the Baroque period.",details:["The Four Seasons is a set of four violin concertos associated with scenes from nature.","His concertos often contrast a recurring orchestral passage with solo sections.","Vivaldi's music influenced other composers, including Bach."],example:"Explore: Spring from The Four Seasons and notice the contrast between soloist and orchestra.",related:["baroque-period","bach"]},
  {id:"handel",title:"George Frideric Handel",category:"Music History",level:"Composer profile",summary:"A Baroque composer celebrated for operas, oratorios, and the famous Hallelujah chorus.",definition:"George Frideric Handel (1685–1759) was a German-born composer who spent much of his career in Britain and became known for dramatic vocal and orchestral music.",details:["His best-known works include Messiah, Water Music, and Music for the Royal Fireworks.","An oratorio tells a story through vocal soloists, chorus, and orchestra, usually without staged acting.","Handel's music often features memorable melodies and powerful choral writing."],example:"Explore: Messiah and listen for how the chorus builds musical intensity.",related:["baroque-period","bach"]},
  {id:"mozart",title:"Wolfgang Amadeus Mozart",category:"Music History",level:"Composer profile",summary:"A Classical-era composer known for elegant melodies, operas, concertos, and symphonies.",definition:"Wolfgang Amadeus Mozart (1756–1791) was an Austrian composer whose work spans opera, symphonies, concertos, chamber music, and sacred music.",details:["His operas include The Magic Flute, Don Giovanni, and The Marriage of Figaro.","His music often combines clear formal design with expressive harmony and memorable themes.","Mozart composed in many genres and was especially influential in opera and the piano concerto."],example:"Explore: Eine kleine Nachtmusik or the overture to The Marriage of Figaro.",related:["classical-period","haydn","musical-form"]},
  {id:"haydn",title:"Joseph Haydn",category:"Music History",level:"Composer profile",summary:"A key figure in the development of the symphony and string quartet.",definition:"Joseph Haydn (1732–1809) was an Austrian composer whose long career helped establish important conventions of Classical instrumental music.",details:["He composed more than 100 symphonies and many string quartets.","His music often uses clear themes, balanced phrases, and playful surprises.","Haydn influenced Mozart and Beethoven and is sometimes called the 'Father of the Symphony' or 'Father of the String Quartet.'"],example:"Explore: Symphony No. 94, known as the Surprise Symphony.",related:["classical-period","mozart","beethoven"]},
  {id:"beethoven",title:"Ludwig van Beethoven",category:"Music History",level:"Composer profile",summary:"A groundbreaking composer whose music connects Classical structure with Romantic expression.",definition:"Ludwig van Beethoven (1770–1827) was a German composer and pianist whose works expanded the scale, intensity, and expressive possibilities of symphonies, sonatas, and chamber music.",details:["His works include nine symphonies, piano sonatas, string quartets, and the opera Fidelio.","His career is often discussed in early, middle, and late periods because his style changed substantially.","Beethoven continued composing after experiencing significant hearing loss."],example:"Explore: Symphony No. 5 and notice how a short rhythmic motive returns and develops.",related:["classical-period","romantic-period","musical-form"]},
  {id:"chopin",title:"Frédéric Chopin",category:"Music History",level:"Composer profile",summary:"A Romantic composer who transformed piano music through lyricism, color, and expressive flexibility.",definition:"Frédéric Chopin (1810–1849) was a Polish composer and pianist who wrote almost entirely for the piano, creating works that combine poetic melodies with distinctive harmony and technique.",details:["His works include nocturnes, mazurkas, polonaises, waltzes, études, and two piano concertos.","His music often uses flexible timing called rubato, while preserving an underlying pulse.","Polish dance forms influenced several of his compositions."],example:"Explore: a nocturne for lyrical phrasing or a mazurka for Polish dance rhythms.",related:["romantic-period","tonality"]},
  {id:"tchaikovsky",title:"Pyotr Ilyich Tchaikovsky",category:"Music History",level:"Composer profile",summary:"A Russian Romantic composer known for expressive orchestral music and celebrated ballets.",definition:"Pyotr Ilyich Tchaikovsky (1840–1893) was a Russian composer whose music combines memorable melodies, vivid orchestration, and dramatic emotional contrasts.",details:["His famous ballets include Swan Lake, The Sleeping Beauty, and The Nutcracker.","He also composed symphonies, concertos, operas, and chamber music.","His orchestration often gives instruments distinctive colors and expressive roles."],example:"Explore: The Nutcracker and listen for how orchestral timbres characterize different scenes.",related:["romantic-period","musical-form"]},
  {id:"debussy",title:"Claude Debussy",category:"Music History",level:"Composer profile",summary:"A French composer known for atmospheric textures and innovative harmonic color.",definition:"Claude Debussy (1862–1918) helped reshape music around the turn of the 20th century. His style is often associated with impressionism, although he did not favor that label for his music.",details:["He explored whole-tone scales, modes, parallel chords, and unusual timbral combinations.","Important works include Clair de lune, Prélude à l'après-midi d'un faune, and La mer.","His music often creates atmosphere through color and texture rather than relying only on traditional tonal tension."],example:"Explore: La mer or Prélude à l'après-midi d'un faune and notice the shifting colors.",related:["modern-period","modes","tonality"]},
  {id:"stravinsky",title:"Igor Stravinsky",category:"Music History",level:"Composer profile",summary:"A 20th-century composer known for rhythmic innovation and a career that crossed several styles.",definition:"Igor Stravinsky (1882–1971) was a Russian-born composer whose music changed considerably across his long career, from richly colored ballets to neoclassical and serial works.",details:["The Firebird, Petrushka, and The Rite of Spring are among his best-known ballets.","The Rite of Spring is famous for its strong rhythms, shifting accents, and bold orchestration.","Stravinsky later explored neoclassicism and twelve-tone techniques."],example:"Explore: The Rite of Spring and tap along to its changing accents.",related:["modern-period","polyrhythm","musical-form"]}
];

const articleGrid = document.getElementById("article-grid");
const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
const resultsCount = document.getElementById("results-count");
const activeFilter = document.getElementById("active-filter");
const clearSearch = document.getElementById("clear-search");
const emptyState = document.getElementById("empty-state");
const dialog = document.getElementById("article-dialog");
const dialogContent = document.getElementById("dialog-content");
let selectedCategory = "All";
let currentQuery = "";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function filterArticles() {
  const query = currentQuery.trim().toLowerCase();
  return articles.filter(a => {
    const categoryMatch = selectedCategory === "All" || a.category === selectedCategory;
    const searchable = [a.title,a.category,a.level,a.summary,a.definition,...a.details,...a.related].join(" ").toLowerCase();
    return categoryMatch && (!query || searchable.includes(query));
  });
}
function renderArticles() {
  const list = filterArticles();
  articleGrid.innerHTML = list.map(a => `
    <button class="article-card" data-id="${a.id}" aria-label="Read ${escapeHTML(a.title)}">
      <div class="article-meta"><span>${escapeHTML(a.category)}</span><span class="article-level">${escapeHTML(a.level)}</span></div>
      <h3>${escapeHTML(a.title)}</h3><p>${escapeHTML(a.summary)}</p>
      <div class="article-footer"><span>Read article</span><span>↗</span></div>
    </button>`).join("");
  resultsCount.textContent = `${list.length} ARTICLE${list.length===1?"":"S"}`;
  activeFilter.textContent = selectedCategory === "All" ? (currentQuery ? `Search: “${currentQuery}”` : "All topics") : selectedCategory;
  clearSearch.hidden = !currentQuery;
  emptyState.hidden = list.length > 0;
  articleGrid.hidden = list.length === 0;
  articleGrid.querySelectorAll("[data-id]").forEach(btn => btn.addEventListener("click", () => openArticle(btn.dataset.id)));
}
function setCategory(category) {
  selectedCategory = category;
  document.querySelectorAll(".category-card").forEach(btn => btn.classList.toggle("active", btn.dataset.category === category));
  renderArticles();
}
function openArticle(id) {
  const a = articles.find(item => item.id === id);
  if (!a) return;
  const related = a.related.map(r => articles.find(item => item.id === r)).filter(Boolean);
  dialogContent.innerHTML = `
    <div class="dialog-kicker">${escapeHTML(a.category)} · ${escapeHTML(a.level)}</div>
    <h2>${escapeHTML(a.title)}</h2>
    <p>${escapeHTML(a.summary)}</p>
    <h3>DEFINITION</h3><p>${escapeHTML(a.definition)}</p>
    <h3>KEY IDEAS</h3><ul>${a.details.map(d=>`<li>${escapeHTML(d)}</li>`).join("")}</ul>
    <h3>MUSICAL EXAMPLE</h3><div class="music-example">${escapeHTML(a.example)}</div>
    <h3>RELATED TOPICS</h3><div class="related-links">${related.length ? related.map(r=>`<button data-related="${r.id}">${escapeHTML(r.title)} ↗</button>`).join("") : "<span>No related topics yet.</span>"}</div>`;
  dialog.showModal();
  dialogContent.querySelectorAll("[data-related]").forEach(btn => btn.addEventListener("click", () => openArticle(btn.dataset.related)));
}
document.querySelectorAll(".category-card").forEach(btn => btn.addEventListener("click", () => {
  setCategory(btn.dataset.category);
  document.getElementById("library").scrollIntoView({behavior:"smooth"});
}));
searchForm.addEventListener("submit", event => {
  event.preventDefault();
  currentQuery = searchInput.value;
  renderArticles();
  document.getElementById("library").scrollIntoView({behavior:"smooth"});
});
searchInput.addEventListener("input", () => {
  currentQuery = searchInput.value;
  renderArticles();
});
document.querySelectorAll("[data-search]").forEach(btn => btn.addEventListener("click", () => {
  searchInput.value = btn.dataset.search;
  currentQuery = btn.dataset.search;
  renderArticles();
  document.getElementById("library").scrollIntoView({behavior:"smooth"});
}));
clearSearch.addEventListener("click", () => {searchInput.value="";currentQuery="";renderArticles();searchInput.focus();});
document.getElementById("reset-library").addEventListener("click", () => {searchInput.value="";currentQuery="";setCategory("All");});
document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {if(event.target===dialog) dialog.close();});
document.getElementById("back-to-top").addEventListener("click", event => {event.preventDefault();window.scrollTo({top:0,behavior:"smooth"});});

const scaleFrequencies = [261.63,293.66,329.63,349.23,392.00,440.00,493.88,523.25];
let audioContext = null;
let isPlaying = false;
document.getElementById("play-scale").addEventListener("click", async () => {
  if (isPlaying) return;
  const button = document.getElementById("play-scale");
  const label = document.getElementById("play-label");
  const status = document.getElementById("audio-status");
  const keys = [...document.querySelectorAll(".white-keys span")];
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) throw new Error("Audio is not supported by this browser.");
    audioContext = audioContext || new AudioCtx();
    if (audioContext.state === "suspended") await audioContext.resume();
    isPlaying = true; button.disabled = true; label.textContent = "Playing C major scale…";
    status.textContent = "Listen for the whole-step and half-step pattern.";
    for (let i=0;i<scaleFrequencies.length;i++) {
      keys.forEach(k=>k.classList.remove("highlight"));
      keys[i].classList.add("highlight");
      const osc=audioContext.createOscillator(), gain=audioContext.createGain();
      osc.type="sine";osc.frequency.value=scaleFrequencies[i];
      gain.gain.setValueAtTime(0.0001,audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.14,audioContext.currentTime+0.025);
      gain.gain.setTargetAtTime(0.0001,audioContext.currentTime+0.25,0.07);
      osc.connect(gain);gain.connect(audioContext.destination);
      osc.start();osc.stop(audioContext.currentTime+0.42);
      await new Promise(resolve=>setTimeout(resolve,390));
    }
    keys.forEach(k=>k.classList.remove("highlight"));
    label.textContent="Play scale example";status.textContent="Uses your browser's built-in audio; no sound file needed.";
  } catch(error) {
    status.textContent=error.message || "Audio could not be played. Try clicking again.";
    label.textContent="Try again";
  } finally {isPlaying=false;button.disabled=false;}
});
renderArticles();
