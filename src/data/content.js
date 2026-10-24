import {
  Tv, Film, Shapes, ListOrdered, Coffee, PencilLine, MessagesSquare, NotebookPen,
  BookOpenCheck, Brain, Eye, PenTool, RotateCcw, TrendingUp, Layers, Target,
  ClipboardCheck, SearchCheck, Repeat, CircleHelp, GraduationCap, Palette, Puzzle,
  Mic, Users, Lightbulb, Gamepad2, Sparkles, Heart, Smile, MessageCircle,
  Compass, Clock, CalendarCheck, FileText, Timer,
} from 'lucide-react'

export const heroCards = [
  { label: 'Visual Learning', icon: Tv, cls: 'fc-1' },
  { label: 'Concept Clarity', icon: Lightbulb, cls: 'fc-2' },
  { label: 'Steady Progress', icon: TrendingUp, cls: 'fc-3' },
  { label: 'Confidence Building', icon: Heart, cls: 'fc-4' },
]

export const beliefs = [
  {
    n: '01',
    title: 'From Memorising to Understanding',
    text: 'Help students understand concepts instead of simply memorising answers.',
    icon: Brain,
    tone: 'peach',
  },
  {
    n: '02',
    title: 'From Passive Learning to Discovery',
    text: 'Use visual explanations, educational videos, diagrams, examples, and practical activities.',
    icon: Compass,
    tone: 'sage',
  },
  {
    n: '03',
    title: 'From Fear of Questions to Curiosity',
    text: 'Create a supportive environment where students can ask questions without hesitation.',
    icon: CircleHelp,
    tone: 'lavender',
  },
]

export const philosophy = [
  'Concept-based teaching',
  'Friendly and approachable teachers',
  'Visual explanations with a TV, videos, animations and diagrams',
  'Questions are always welcome',
  'Individual attention for each learner',
  'Regular practice and revision',
  'Homework support',
  'Assessments and exam preparation',
  'Study planning and time management',
  'Confidence-building and independent learning',
  'Creative activities for overall development',
]

export const classroomWays = [
  { icon: Tv, title: 'TV-based visual teaching', text: 'Big-screen lessons that bring chapters to life.' },
  { icon: Film, title: 'Animations and videos', text: 'Educational clips that show how things work.' },
  { icon: Shapes, title: 'Diagrams and illustrations', text: 'Ideas drawn out so they are easier to see.' },
  { icon: ListOrdered, title: 'Step-by-step explanations', text: 'Each idea built one clear step at a time.' },
  { icon: Coffee, title: 'Everyday examples', text: 'Concepts linked to things students already know.' },
  { icon: PencilLine, title: 'Guided practice', text: 'Practising together before practising alone.' },
  { icon: MessagesSquare, title: 'Question-and-answer sessions', text: 'Space to ask, discuss and clear doubts.' },
  { icon: NotebookPen, title: 'Worksheets and revision', text: 'Regular practice that keeps learning fresh.' },
]

export const classGroups = [
  {
    id: 'foundation',
    tone: 'sage',
    range: 'Classes 1–5',
    title: 'Foundation',
    intro: 'Students build strong fundamentals through curiosity, play and patient guidance.',
    items: [
      'Reading and writing',
      'English grammar and comprehension',
      'Mathematics fundamentals',
      'Basic science concepts where applicable',
      'Social Studies',
      'Relevant school languages',
      'Homework assistance',
      'Practice worksheets',
      'Regular revision',
    ],
  },
  {
    id: 'concept',
    tone: 'peach',
    range: 'Classes 6–8',
    title: 'Concept Development',
    intro: 'Ideas get deeper. Students learn to reason, connect topics and write answers well.',
    items: [
      'Mathematics and problem-solving',
      'Science concepts',
      'English grammar and comprehension',
      'History',
      'Geography',
      'Civics',
      'Relevant school languages',
      'Written-answer practice',
      'Worksheets',
      'Chapter revision',
      'Assessments',
    ],
  },
  {
    id: 'exam',
    tone: 'lavender',
    range: 'Classes 9–10',
    title: 'Academic and Exam Preparation',
    intro: 'Clear concepts, steady practice and a planned approach to examinations.',
    items: [
      'Subject-wise concept teaching',
      'Chapter-wise syllabus coverage',
      'Important concepts and formulas',
      'Textbook questions',
      'Written-answer practice',
      'Examination-style questions',
      'Regular assessments',
      'Doubt-clearing sessions',
      'Revision plans',
      'Time-management strategies',
    ],
  },
]

export const classesDisclaimer =
  'Exact subjects, curriculum and board coverage are to be confirmed by the centre. Please enquire to find out what is available for your child’s class.'

export const class10Parts = [
  { icon: Layers, title: 'Chapter-Wise Teaching', text: 'Break the syllabus into manageable chapters and topics.' },
  { icon: Lightbulb, title: 'Concept Clarity', text: 'Explain difficult topics in simple language using diagrams, examples, and visual teaching.' },
  { icon: PencilLine, title: 'Practice Sessions', text: 'Provide opportunities to practise textbook exercises, worksheets, and examination-style questions.' },
  { icon: Target, title: 'Weekly Study Targets', text: 'Help students organise their learning into manageable goals.' },
  { icon: ClipboardCheck, title: 'Regular Assessments', text: 'Use tests and practice questions to identify areas needing improvement.' },
  { icon: SearchCheck, title: 'Mistake Analysis', text: 'Help students understand why an answer was incorrect and how to improve.' },
  { icon: Repeat, title: 'Revision Sessions', text: 'Revisit important concepts, formulas, definitions, and difficult chapters.' },
  { icon: CircleHelp, title: 'Doubt Clearing', text: 'Encourage students to ask questions and clarify concepts.' },
  { icon: GraduationCap, title: 'Examination Preparation', text: 'Practise writing answers, managing time, and approaching examination questions systematically.' },
]

export const class10Flow = ['Learn', 'Understand', 'Practise', 'Test', 'Revise', 'Improve']

export const methodSteps = [
  { n: 1, title: 'Understand', icon: Brain, text: 'Explain the concept in simple language.' },
  { n: 2, title: 'Visualise', icon: Eye, text: 'Use educational videos, diagrams, animations, and examples.' },
  { n: 3, title: 'Practise', icon: PenTool, text: 'Solve questions and apply what was learned.' },
  { n: 4, title: 'Recall and Revise', icon: RotateCcw, text: 'Revisit concepts and explain them in the student’s own words.' },
  { n: 5, title: 'Improve', icon: TrendingUp, text: 'Review mistakes, receive feedback, clear doubts, and practise again.' },
]

export const habits = [
  { icon: Target, label: 'Daily study goals' },
  { icon: Repeat, label: 'Regular revision' },
  { icon: Brain, label: 'Active recall' },
  { icon: FileText, label: 'Practice worksheets' },
  { icon: NotebookPen, label: 'Organised notes' },
  { icon: CircleHelp, label: 'Doubt clearing' },
  { icon: BookOpenCheck, label: 'Homework completion' },
  { icon: Timer, label: 'Time management' },
  { icon: CalendarCheck, label: 'Weekly progress reviews' },
]

export const studyWeeks = [
  {
    week: 1, title: 'Learn', progress: 25, tone: 'sage',
    items: ['Introduce new chapters', 'Explain concepts', 'Identify important topics', 'Set weekly learning goals'],
  },
  {
    week: 2, title: 'Practise', progress: 50, tone: 'peach',
    items: ['Solve textbook questions', 'Complete worksheets', 'Practise numerical problems where relevant', 'Strengthen understanding'],
  },
  {
    week: 3, title: 'Revise', progress: 75, tone: 'lavender',
    items: ['Review previous lessons', 'Recall important concepts', 'Revisit difficult topics', 'Clear doubts'],
  },
  {
    week: 4, title: 'Test and Improve', progress: 100, tone: 'yellow',
    items: ['Conduct appropriate assessments', 'Review mistakes', 'Identify areas for improvement', 'Plan the next learning cycle'],
  },
]

export const studyPlanNote =
  'This is a sample framework. Actual plans are adapted to each student’s syllabus, academic calendar and progress.'

export const sundayActivities = [
  { icon: Palette, label: 'Art and craft', tone: 'peach' },
  { icon: PenTool, label: 'Drawing and painting', tone: 'lavender' },
  { icon: Puzzle, label: 'Puzzles and brain games', tone: 'sage' },
  { icon: BookOpenCheck, label: 'Storytelling', tone: 'yellow' },
  { icon: Mic, label: 'Public speaking activities', tone: 'peach' },
  { icon: MessageCircle, label: 'Communication exercises', tone: 'sage' },
  { icon: Users, label: 'Team challenges', tone: 'yellow' },
  { icon: Sparkles, label: 'Creative thinking', tone: 'lavender' },
  { icon: Gamepad2, label: 'Fun educational games', tone: 'peach' },
  { icon: Users, label: 'Group activities', tone: 'sage' },
  { icon: Lightbulb, label: 'Problem-solving challenges', tone: 'yellow' },
]

export const sundayBenefits = [
  'Creativity', 'Communication', 'Teamwork', 'Confidence',
  'Critical thinking', 'Social interaction', 'Enjoyment of learning',
]

export const faqs = [
  {
    q: 'Which classes does MindNest teach?',
    a: 'MindNest offers tuition for students from Class 1 to Class 10, organised into Foundation (1–5), Concept Development (6–8), and Academic and Exam Preparation (9–10).',
  },
  {
    q: 'Which subjects are available?',
    a: 'Subjects depend on the class. See the Classes page for what each stage covers. The exact subjects, curriculum and board coverage are to be confirmed by the centre, so please enquire for your child’s class.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. MindNest offers a one-week free trial so your child can experience the teaching approach before you decide. Use the “Reserve a Free Trial” button to enquire.',
  },
  {
    q: 'How does visual teaching work?',
    a: 'Lessons use a TV or large screen, educational videos, animations, diagrams and everyday examples to show how ideas work, followed by guided practice so students apply what they have seen.',
  },
  {
    q: 'How is Class 10 preparation organised?',
    a: 'Preparation runs through the year: chapter-wise teaching, concept clarity, practice sessions, weekly study targets, regular assessments, mistake analysis, revision and doubt clearing. MindNest does not promise any particular marks or results.',
  },
  {
    q: 'What happens on Sunday Activity Day?',
    a: 'Sunday is for activities, not regular lessons: art and craft, puzzles, storytelling, public speaking, team challenges and more. The schedule, age groups and fee inclusion are to be confirmed by the centre.',
  },
  {
    q: 'How can parents enquire about fees?',
    a: 'Visit the Fees page to see the fee entry for each class, and use the enquiry button to ask on WhatsApp. Confirmed fees will be shown there once published by the centre.',
  },
  {
    q: 'How can I contact the centre?',
    a: 'Use the enquiry form on the Contact page, which prepares a WhatsApp message to the centre. Phone, email, address and hours will appear there once the centre adds them.',
  },
  {
    q: 'How can I enrol my child?',
    a: 'Start with the free trial or an enquiry. The centre will guide you on batch availability and the next steps for admission.',
  },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/classes', label: 'Classes' },
  { to: '/class-10', label: 'Class 10' },
  { to: '/method', label: 'Our Method' },
  { to: '/study-plan', label: 'Study Plan' },
  { to: '/sunday', label: 'Sunday Activity Day' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/fees', label: 'Fees' },
  { to: '/contact', label: 'Contact' },
]

export const enquiryTypes = [
  'One-week free trial',
  'Class-wise fees',
  'Subject details',
  'Batch timings',
  'Sunday Activity Day',
  'General enquiry',
]

export const IconClock = Clock
export const IconSmile = Smile
