# Arunachala World School – Quiz Platform
Static site (no build step) + Firebase Auth + Cloud Firestore. Pages: `index.html` (students), `host.html` (host dashboard, quiz preparation, live control, results).

## Folder structure
```
index.html  host.html  app.css  common.js  firebase-config.js  firestore.rules  logo.png  README.md
```
## 1. Firebase setup (browser only)
1. console.firebase.google.com → Add project (Spark/free plan is enough).
2. Build → Firestore Database → Create database (production mode).
3. Firestore → Rules → paste `firestore.rules` → Publish.
4. Build → Authentication → Sign-in method → enable **Email/Password** and **Anonymous**.
5. Authentication → Users → **Add user** (your host email + password). Only create accounts for teachers.
6. Project settings → Your apps → Web (</>) → copy the config into `firebase-config.js`.
7. Authentication → Settings → Authorized domains → add your Vercel domain after deployment.
## 2. GitHub + Vercel
1. github.com → New repository → "Add file → Upload files" → drag all files here → Commit.
2. vercel.com → Add New Project → Import the repo → Framework "Other", no build command → Deploy.
3. No environment variables are needed (Firebase web config is public by design; rules protect data).
## 3. Test
Open `/host.html`, log in, **+ New Quiz**, add questions, **Publish**, press **Start** on the quiz card → a PIN shows.
On a phone/another browser open the main URL, enter name, class, PIN → Join. Press **Start quiz** on the host.
## 4. Running a real quiz
Keep the **host browser tab open for the whole quiz**: it scores answers and advances questions. Use Full screen on a projector.
After the quiz use Results → Export CSV / Print.
## Known limits
- Scoring runs in the host browser (rules block students from writing scores). For tamper-proof scoring, move it to a Cloud Function (needs the Blaze plan).
- Timers use device clocks; a badly wrong student clock can skew that student's timer.
- Question images are URLs (no upload). Deleting a quiz does not remove its player/answer sub-documents.
