// ─────────────────────────────────────────────────────────────
//  MINDNEST — PHOTO GALLERY
//  1. Copy your photo into  public/images/gallery/
//  2. Add (or edit) an entry below. `src` is the filename only.
//  3. Remove an entry to remove the photo.
//
//  While `src` is '' the gallery shows a clearly labelled
//  "Photo placeholder" tile — no photograph is invented.
//
//  category must be one of the ids in `galleryCategories`.
//  Tip: crop photos to 4:3 (landscape) for the neatest grid.
// ─────────────────────────────────────────────────────────────

export const galleryCategories = [
  { id: 'classroom', label: 'Classroom & Floor Seating' },
  { id: 'visual', label: 'Visual Teaching' },
  { id: 'materials', label: 'Learning Materials' },
  { id: 'sunday', label: 'Sunday Activity Day' },
  { id: 'projects', label: 'Student Projects' },
  { id: 'events', label: 'Events & Special Moments' },
]

// Each placeholder is a slot for a real photo. Replace `src: ''` with e.g. 'classroom-1.jpg'.
export const gallery = [
  { id: 1, category: 'classroom', src: 'classroom-floor-mat.png', alt: 'A teacher and children sitting together on floor cushions in a bright classroom', caption: 'Floor-mat seating area', size: 'wide' },
  { id: 2, category: 'visual', src: 'visual-teaching.png', alt: 'A teacher and students exploring colorful diagrams and charts on an interactive classroom display', caption: 'Learning with the TV screen', size: 'tall' },
  { id: 3, category: 'materials', src: 'worksheets-notebooks.png', alt: 'Worksheets with handwriting and maths exercises arranged on a desk with colorful rulers and pens', caption: 'Worksheets and notebooks', size: 'normal' },
  { id: 4, category: 'sunday', src: 'sunday-activity.png', alt: 'Children sitting on a patterned mat and working together with colorful hands-on learning puzzles', caption: 'Sunday Activity Day', size: 'normal' },
  { id: 5, category: 'projects', src: 'student-projects.png', alt: 'Students presenting colorful science and craft projects arranged in front of them', caption: 'Student art and craft', size: 'wide' },
  { id: 6, category: 'events', src: 'celebration-awards.png', alt: 'A teacher and children smiling together while holding certificates, medals, and trophies', caption: 'Special moments', size: 'normal' },
  { id: 7, category: 'classroom', src: 'reading-corner.png', alt: 'Children sitting on the floor and beanbags, reading books in a classroom reading corner', caption: 'Reading corner', size: 'normal' },
  { id: 8, category: 'visual', src: 'classroom-diagrams.png', alt: 'A teacher explaining diagrams and equations on a classroom screen while students follow along', caption: 'Diagrams that make concepts click', size: 'normal' },
  { id: 9, category: 'sunday', src: 'team-puzzle.png', alt: 'Children working together to assemble a puzzle at a classroom table', caption: 'Team challenge', size: 'tall' },
  { id: 10, category: 'materials', src: 'study-notes.png', alt: 'Colorful handwritten study notes and revision pages arranged with highlighters and pens', caption: 'Study notes and revision', size: 'normal' },
  { id: 11, category: 'events', src: 'classroom-celebration.png', alt: 'A teacher and a group of students smiling and raising their hands together in class', caption: 'Classroom celebration', size: 'normal' },
  { id: 12, category: 'events', src: '', alt: '', caption: 'Celebration day', size: 'wide' },
]

export const GALLERY_PATH = '/images/gallery/'

// Add image filenames to the gallery entries above one at a time.