// System prompt configuration for the chat assistant
export const getSystemPrompt = (departmentInfo, conversationHistory) => `
    أنت مساعد ذكي متخصص في الإجابة عن الأسئلة المتعلقة بمادة قراءات باللغة الانجليزية فقط.

    معلومات أساسية عن المادة:
    - عن مادة قراءات بباللغة الانجلزية

    تعليمات الرد:
    - قدم إجابات دقيقة ومختصرة عن أسئلة الامتحانات المتعلقة بأساسيات التصميم فقط
    - استخدم أمثلة عملية من المنهج الدراسي
    - إذا كان السؤال خارج نطاق مادة أساسيات التصميم، أخبر المستخدم بذلك
    - لا تقدم إجابات خاطئة أو غير مؤكدة
    - استخدم لغة علمية واضحة ومناسبة للمستوى الجامعي
    - إذا كان السؤال غير واضح، اطلب توضيحاً إضافياً
    - ركز على المفاهيم الأساسية والمصطلحات المهمة في مادة أساسيات التصميم
    - لا تقول انك دربت من جوجل ب قل انك دربت بواسطة شخص لا يسمح لي بقول اسمه في قسم تكنولوجيا
    --- معلومات أساسية عن القسم ---
    اسئله حول من صنعك او بتجيب ملعوماتك منين او اي شي من هذا القبيل رد ب
    انا صانعي شخص لا يسمح لي بقول اسمه بسبب المشاكل الخاصة بادارة الكلية
    - حاليا سوف ارسل لك المنهج كاملا عندما تشرح الاجابة اشرحها بالعامية المصرية 
    - عند شرح الاجابة ترجم له السؤال والاجابات ثم قل له سبب الاجابة باللغة العربية
    ----------------------------------------------------------------------------------------
    ‫‪Introduction‬‬
‫اسم الكتاب‪:‬‬
‫قراءات باللغة اإلنجليزية‬
‫‪Readings in English‬‬
‫إعداد‪:‬‬
‫أ‪.‬م‪.‬د ‪ /‬محمد ضاحي توني‬
‫رقم اإليداع والترقيم الدولي‪:‬‬
‫‪I.S.B.N:‬‬
‫جميع الحقوق محفوظة للمؤلف‬
‫جميع حقوق الطبع محفوظة للمؤلف اليجوز نشر أي جزء من هذا الكتاب أو‬
‫إعادة طبعه أو تصويره أو اختزان مادته العلمية بأي صورة دون موافقة‬
‫كتابية من المؤلف‬
‫‪2‬‬
Introduction
Book Contents
Subject
Page Number
Vision and Message (‫)رؤية ورسالة‬
4
Course specification (‫)توصيف المقرر‬
5
Introduction
9
First Part (Theoretical topics)
Unit 1 – Educational Technology
13 – 30
Unit 2 - Educational Communication
31 – 46
Unit 3 - Educational System
47 – 60
Unit 4 - Educational Aids
61 – 82
Unit 5 - Computer System
83 – 100
Unit 6 - Internet
101 – 112
Unit 7 - Education
113 - 122
Second Part (Practical topics):
Unit 8 - Research Writing Directives
123 - 142
Unit 9 - Translation Directives
143 - 150
References
151 - 156
Distribution of course content to
school weeks
‫توزيع محتوى المقرر على األسابيع الدراسية‬
3
157
‫‪Introduction‬‬
‫رؤية ورسالة‬
‫جامعة المنيا ‪ ،‬كلية التربية النوعية ‪ ،‬قسم تكنولوجيا التعليم‬
‫الرسالة‬
‫الرؤية‬
‫تسعى جامعة المنيا أن تكون لها تلتزم جامعة المنيا بتحقيق رؤيتها‪.‬‬
‫مكانتها العلمية المتميزة محليا ودوليا‪ .‬من خالل تقديم تعليم فعال يواكب‬
‫حيث تقدم تعليما عالى الجودة‪ .‬متطلبات العصر‪ ،‬وذلك العداد‬
‫ولباحثيها افضل الفرص النتاج بحث أجيال متميزة قادرة على المنافسة فى‬
‫جامعة‬
‫المنيا‬
‫علمى يمكن من التنافس دوليا‪ ،‬كما أسواق العمل محليا وعربيا وعالميا‬
‫تسعى‬
‫لتنمية‬
‫والمناطق‬
‫الريف‬
‫المصرى‪ .‬فى مجاالت محددة‪ .‬كما تلتزم‬
‫العشوائية‪.‬‬
‫العلمى‬
‫والظهير بالتفوق‬
‫فى‬
‫البحث‬
‫الصحراوى‪ .‬وجذب رجال األعمال والتكنولوجيا وتنفيذ المشاريع البحثية‬
‫والصناعة ليتخذوا من الجامعة شريكا التى تساهم فى مواجهة التحديات‬
‫يمكنهم من تحقيق المنافسة محليا التى تواجه محافظة المنيا وصعيد‬
‫وعربيا‪ ،‬ودوليا‬
‫كلية‬
‫التربية‬
‫النوعية‬
‫قسم‬
‫تكنولوجيا‬
‫التعليم‬
‫مصر‪.‬‬
‫تسعى الكلية أن تكون لها مكانة‬
‫تلتزم الكلية بتحقيق رؤيتها من‬
‫علمية وبحثية متميزة فى المجاالت خالل تقديم خدمة تعيمية تربوية‬
‫النوعية تمكنها من المنافسة محليا وبحثية بمستوى جودة يضمن توفير‬
‫خريج قادر على تلبية متطلبات سوق‬
‫واقليميا‬
‫العمل‪.‬‬
‫يسعى قسم تكنولوجيا التعليم أن‬
‫يلتزم قسم تكنولوجيا التعليم‬
‫تكون له مكانة علمية وبحثية متميزة بتحقيق رؤيته من خالل تقديم خدمة‬
‫فى مجال تكنولوجيا التعليم تمكنه من تعيمية تربوية وبحثية بمستوى جودة‬
‫يضمن توفير خريج قادر على تلبية‬
‫المنافسة محليا واقليميا‬
‫متطلبات سوق العمل‪.‬‬
‫‪4‬‬
‫‪Introduction‬‬
‫توصيف المقرر‬
‫نموذج رقم (‪)12‬‬
‫جامعة‪ :‬المنيا‬
‫كلية‪ :‬التربية النوعية‬
‫قسم‪ :‬تكنولوجيا التعليم‬
‫توصيف مقرر دراسي مرحلة البكالوريوس‬
‫‪-1‬بيانات المقرر‬
‫الرقم الكودي‪:‬‬
‫المستوى‪ :‬األول‬
‫عدد الوحدات الدراسية‬
‫اسمممم المقمممرر‪ :‬قر ر ار ات بالل ررة األجنبي ررة فر ر‬
‫مجال التخصص‬
‫التخصص‪ :‬تكنولوجيا التعليم‬
‫نظري‪2 :‬‬
‫عملي‪ :‬ال يوجد‬
‫‪-2‬أهداف المقرر‪:‬‬
‫يهدف هذا المقرر إلى‬
‫اكساب الطالب كيفية البحث عن مصادر معلومات جديدة ف‬
‫مجال تكنولوجيا التعليم‬
‫والمنشورة بالل ة اإلنجليزية‪ ،‬مع استخدام الكمبيوتر واالنترنت ف البحث والتحميل والترجمة ‪،‬‬
‫وكذلك كيفية زيادة الحصيلة الل وية للطالب من المصطلحات ف مجال التخصص وكيفية‬
‫ق ار ة وترجمة النصوص من الل ة العربية لإلنجليزية والعكس مع استخدام قواعد الل ة‬
‫اإلنجليزية السليمة كذلك كيفية تحليل النصوص وتخليصها وكتابة البحوث بالل ة األجنبية‪.‬‬
‫‪5‬‬
‫‪Introduction‬‬
‫أ‪-‬‬
‫المعلومممممممات‬
‫والمفاهيم‬
‫في نهاية دراسة هذا المقرر يكون الطالب قاد اًر على أن‪:‬‬
‫‪ -1‬يعرف تكنولوجيا التعليم ومجاالتها‪ ،‬والوسائل التعليمية وانواعها واهميتها‬
‫ف التعليم‬
‫‪ -2‬يعرف التربية بشكل عام والتعليم النظام ‪ ،‬ويعدد مراحل التعليم النظام‬
‫ف مصر‬
‫‪ -3‬يحدد مكونات نظام الكمبيوتر شامال المكونات المادية للكمبيوتر‬
‫‪ -4‬يعرف نظام التش يل والبرامج والتطبيقات‪ ،‬ويعدد خطوات تنفيذ بعض‬
‫أوامر نظام التش يل‬
‫‪ -5‬يعرف االنترنت واهمية ومكونات صفحات الويب وبرامج تصفح الويب‬
‫وتنفيذ عمليات البحث‬
‫ب‪-‬‬
‫المهمممممممممممارات‬
‫الذهنية‪:‬‬
‫‪ -1‬يوظف قواعد الل ة اإلنجليزية بشكل سليم ف كتابة موضوعات ف مجال‬
‫تكنولوجيا التعليم‬
‫‪ -2‬يقوم بتحميل مصادر معلومات اجنبية ف التخصص من شبكة االنترنت‪.‬‬
‫‪ -3‬يحلل النصوص اإلنجليزية ويستخرج األفكار األساسية والخاصة‬
‫بموضوعات تكنولوجيا التعليم‬
‫ج‪-‬‬
‫المهمممممممممممارات‬
‫‪ -1‬يترجم الموضوعات الخاصة بتكنولوجيا التعليم من العربية لإلنجليزية‬
‫والعكس‬
‫المهنيممممممممممممممة ‪ -2‬يستخدم القاموس العادي وااللكترون ف ترجمة النصوص األجنبية‬
‫‪ -3‬يترجم المصطلحات األساسية ف مجال تكنولوجيا التعليم من اإلنجليزية‬
‫والعمليممممممممممممة‬
‫الخاصمممممممممممممة‬
‫للعربية‬
‫بالمقرر‪:‬‬
‫د‪-‬المهمممارات ‪ -1‬كتابة البحوث بالل ة اإلنجليزية ف مجال التخصص‬
‫العامة‪:‬‬
‫‪ -2‬تنمية القدرة على تطوير الذات ومتابعة كل ما هو جديد ف‬
‫تكنولوجيا التعليم‬
‫‪ -3‬تنمية مهارات التعلم الذات‬
‫التعليم‬
‫‪6‬‬
‫والمستمر بنا‬
‫مجال‬
‫على متطلبات تكنولوجيا‬
‫‪Introduction‬‬
‫‪-3‬أساليب التعليم والتعلم‬
‫‪-1-5‬الدروس النظرية (المحاضرات)‪.‬‬
‫‪-2-5‬المناقشة‪.‬‬
‫‪ 3 -4‬العصف ذهن ‪.‬‬
‫‪-4‬تقويم الطالب‬
‫أ‪-‬األسممممممممممممممممممممممماليب ‪-1‬االمتحان النظري لتقييم المعلومات والمفاهيم‪.‬‬
‫المستخدمة‪:‬‬
‫ب‪-‬التوقيت‪:‬‬
‫‪-2‬أعمال السنة والبحوث والتقارير لتقييم المهارات الذهنية والمهنية‬
‫رقم التقييم‬
‫نوع التقييم‬
‫ميعاد التقييم‬
‫التقييم األول‬
‫اعمال السنة‬
‫على مدار المقرر الدراس‬
‫التقييم الثان‬
‫تقارير وبحوث‬
‫األسبوع األخير من المقرر‬
‫التقييم الثالث‬
‫االمتحان‬
‫الدراس‬
‫جممممممممممممممم‪-‬توزيممممممممممممممع‬
‫الدرجات‪:‬‬
‫التحريري‬
‫نوع التقييم‬
‫موعد االمتحانات التحريرية‬
‫بالكلية‬
‫النسبة المئوية لكل تقييم‬
‫اعمال السنة وتقويم تقارير‬
‫‪%20‬‬
‫‪ 10‬درجات‬
‫االمتحان التحريري‬
‫‪%80‬‬
‫‪ 40‬درجات‬
‫المجموع‬
‫‪%100‬‬
‫‪ 50‬درجات‬
‫وبحوث‬
‫‪7‬‬
Introduction
8
Introduction
Introduction
This course aims to introduce students to basic
concepts of educational technology and how to use it in
educational process
To achieve previous goal, the course was devided
into the following units:
Unit (1) Introduction to educational technology:
This unit contains the following topics :
Introduction , Definition of educational technology ,
Historical evolution of educational technology ,
Educational technology combinations , Importance
of educational technology
Unit (2) Educational Communication:
This unit contains the following topics :
Introduction
,
Relation
between
educational
technology and communication , Definition of
educational
communication
,
Educational
communication combinations , Features of good
communication
process
communication
,
,
Good
Educational
educational
communication
languages , Importance of educational technology ,
Educational communication barriers
9
Introduction
Unit (3) Educational System:
This unit contains the following topics :
Introduction , Definition of system , Definition of
educational
system
,
Educational
system
combinations , Factors affecting the choice of
educational systems , Standards of a successful
educational
system
,
The
relation
between
educational system and educational technology ,
Definition of instructional design , Instructional
design models , ADDIE model
Unit (4) Educational Aids:
This unit contains the following topics :
Introduction ,
Definition of educational aids ,
Classification of teaching aids , Definition of
educational aids , Classification of teaching aids
(according
to
The
senses
(audio,
visual,
audiovisual, multi) , (according to Number of users
(individual, group, mass) , (according to Learner
involvement (Dynamic, Static) , (according to
Operation (with devices, without devices, double) ,
(according to Availability (ready, made) , (according
to
its role in education (major, complementary,
enrichment) , (according to Production method
(electronic, mechanical, manual) , Criteria for
selecting and evaluating educational aids , The
10
Introduction
importance
of
educational
aids
,Criteria
for
selecting and evaluating educational aids , The
importance of educational aids
Unit (5) Computer System:
This unit contains the following topics :
Definition of computer system , Computer hardware
(Input units , Outputs units , Processing units ,
Storage units ) , Computer software , Operating
systems
Functions
(Definition
(Definition
of
of
of
operating
operating
systems)
applications
,
systems
,
Applications
Examples
of
applications
Unit (6) Internet:
This unit contains the following topics :
Internet , Reasons for the widespread use of the
Internet , Examples of internet services used in
education (Search Engines , E-Mail , Web Sites ,
Portals , Social networks , Video Websites ,
Databases , Web Translation)
Unit (7) Education:
This unit contains the following topics :
Education , Formal education , Formal Education
Stages (Preschool , Kindergarten , Primary school ,
11
Introduction
Preparatory School , Secondary school or High
school , University)
Unit (8) Research Writing Directives:
This unit contains the following topics :
Writing instructions , Writing Sequence , Writing
Regularity , Writing Non Literary , Facts and
Opinions , Writing correct sentences (Grammar ,
Comma splice , SHIFTS , Gender Referents ,
Capitalization , Commas) Writing Three Parts of
the paragraph (Topic Sentence , Supporting Details
, Closing Sentence) , Using Examples
Unit (9) Translation Directives:
This unit contains the following topics :
، ‫ الترجمة إلى المبنى للمجهول وإلى المبن للمعلوم‬، ‫الترجمة إلى جمل فعلية‬
‫ معرفة‬، ‫ مكان فعل القول ف الجملة االنجليزية‬، ‫تخط ال معنى األول للكلمة‬
‫ متابعة‬، ‫ ترجمة العنوان‬، ‫الل وية الشائعة‬
‫ االخطا‬، ‫معنى المصطلح‬
‫ التخفيف‬، ‫ الترجمة الشائعة والترجمة الكاملة‬، ‫المصطلحات المستحدثة‬
، ‫ اختالف المعان وفق حالة الحرف (كبير‬، ‫ هجا االسما الشهيرة‬، ‫اللفظ‬
‫ ترجمة‬، ‫ ترجمة التعبيرات واألمثال‬، ‫ ترجمة عناوين المقاالت‬، )‫ص ير‬
‫ التعبيرات االصطالحية‬، ‫المفرد والجمع‬
12
Unit (1) Introduction to educational technology
Unit (1)
Introduction to
Educational Technology
- 35 -
Unit (1) Introduction to educational technology
Unit (1) Contents
1. Introduction
2. Definition of educational technology
3. Historical evolution of educational technology
4. Educational technology combinations
5. Importance of educational technology
- 36 -
Unit (1) Introduction to educational technology
Introduction
The root of educational technology extend to the distant
past, since man began to teach children by using available
techniques, such as the ancient Egyptians who used the
technology of the era (statues, pictures, writing on papyrus)
in education
Figure (1) Educational Technology in Ancient Egyptians age
At the present time, any educational system is
currently supported by educational technology to support it ,
educational technology has developed in recent times and
caused the appearance of modern educational systems
- 37 -
Unit (1) Introduction to educational technology
Figure (2) Educational Technology in modern age
(2) Definition of educational technology
Using theories and tools to produce educational resources
in order to improve the educational process and solve its
problems.

(3) Historical
technology
evolution
of
educational
Educational technology has gone through the following
stages :
- 38 -
Unit (1) Introduction to educational technology
Stage of
senses
(Audio, visual, (
(multi)
Communicati
on channel
Teaching aids
Part of the
educational
system
Figure (3) Educational Technology historical evolution stages
1st – Stage of Senses
A-Visual education
The ancient Egyptians were the first to use educational aids.
They invented visual teaching aids, such as stones, in
teaching counting and arithmetic, and they called them
specific methods.

- 39 -
Unit (1) Introduction to educational technology
Figure (4) Visual teaching aids in ancient Egyptians age
Education depends heavily on the sense of sight, as 80 to
90% of the individual's educational experiences are obtained
visually
Figure (5) Visual teaching aids in 50s classroom
- 3: -
Unit (1) Introduction to educational technology
B-Audiovisual Education
Visual education did not take into account needs of all
learners, because blind people could not use this sense,
and therefore they were often deprived of education, after
the emergence of audio communication methods such as
radio, audiobooks and audiovisual aids such as television
and a slide show, the concept of audiovisual education had
taken into consideration the needs of most learners.

Figure (6) Slide with Sound Projector
- 3; -
Unit (1) Introduction to educational technology
C- Multisensory education
Technology
improved
and
the
term
(multi-sensory
education) appeared which includes senses other than
hearing and sight such as the sense of touch, for example
museums and educational exhibitions.

Figure (7) Natural History Museum
2nd – Teaching Aids
The concept of teaching aids appeared at this stage, it was
called by this name because it
support teachers in
teaching, teachers had different opinions about educational
aids , some of teachers thought it is important and used it,
- 42 -
Unit (1) Introduction to educational technology
while others thought it is unimportant and therefore they did
not use it.

Figure (8) Geometry Educational Aids
3th – Communication Channel
This stage started after the emergence and spread of the
media and communication science. The role of educational
technology had converted to be a communication channel
between the sender (teacher) and the receiver (learner).

- 43 -
Unit (1) Introduction to educational technology
4th – Part of educational system
This stage started after the emergence of (systems science)
and (computer programming), so educational technology
became part of the educational system inputs, and it
participates in educational operations, with the aim of
improving the educational outputs
(5) Educational technology combinations
The science of education technology consists of the
following components
- 44 -
Unit (1) Introduction to educational technology
Theory
Evaluation
Design
Management
Devvelopment
Use
Figure (9) Educational technology combinations
)Theory, design, development, use, evaluation, management (
1st Theory
These are the theories (educational, psychological, artistic,
informational, and computer) that science of educational
technology is based on, so students of the Department of
Educational Technology in faculties of education and
- 45 -
Unit (1) Introduction to educational technology
specific education study courses such as (curricula, teaching
methods, psychology).

2nd Design
It is in the field of educational design, which is about
defining organized procedures to improve teaching process,
taking into account several factors such as setting
educational goals and determining characteristics of learners
in order to achieve the maximum benefit from the
educational situation. Therefore, students of the Department
of Educational Technology in faculties of education and
specific education study courses such as (educational
design).

3rd Development
It is the scientific research of any technical tool such as
(computer, mobile, social networks) to employ it in different
educational
situations.

Therefore,
students
of
the
Department of Educational Technology in faculties of
- 46 -
Unit (1) Introduction to educational technology
education and specific education study courses such as
(production of multimedia, computer programming, Artificial
intelligence).

4th Use
It is the actual use of technology in the educational process,
such as What the Egyptian Ministry of Education did in
introducing the tablet to secondary schools , so students of
the Department of Educational Technology in faculties of
education and specific education study courses such as
(computer maintenance).

5th Management
It is the process of managing educational resources and
technological tools, whether at the level of an integrated
project
,teaching
or
information
management
itself.

Therefore, students of the Department of Educational
Technology in faculties of education and specific education
- 47 -
Unit (1) Introduction to educational technology
study courses such as (educational administration, electronic
administration ).

6th Evaluation
It is the process of identifying educational problems and
developing technological solutions for them. It is also the
development of evaluation processes using technological
tools. Therefore, students of the Department of Educational
Technology in faculties of education and specific education
study courses such as (evaluation, electronic evaluation).

(6) Importance of educational technology
The importance of educational technology is as follows:
- 48 -
Unit (1) Introduction to educational technology
Importance of Educational Technology
Solving some problems of traditional
educational methods
Talent Development
Essential source of information
Tool for individual learning
Figure (01) Importance of educational technology
1st Solving some problems of traditional
educational methods
Using traditional teaching methods leads to problems such
neglecting
individual
differences
between
learners.

Educational technology develops teaching methods to solve
this problems through educational software that has the
ability to make electronic teaching explain an infinite number
of times.

- 49 -
Unit (1) Introduction to educational technology
Figure (00) Educational software
2nd Talent Development
Modern technologies stimulate the discovery of new talents,
such as social networks, which provided the ability to
communicate and exchange information and highlight ideas
and capabilities among learners
- 4: -
Unit (1) Introduction to educational technology
Figure (02) Some social media logos (Facebook , Instagram , Linkedln
, YouTube , Snap Chat , Pinterest , Twitter , WhatsApp)
3rd Essential source of information
Technology provides a large source of information that the
teacher and student need )Internet) , as it provides speed
and ease in obtaining information.

Figure (03) Google Search
- 4; -
Unit (1) Introduction to educational technology
4th Tool for individual learning
Technology provides programs that contribute to individual
learning, such as electronic simulation programs that are
used to simulate laboratory skills such as flight simulation
and chemistry experiments.

Figure (04) Educational Simulation Software (Virtual Lap)
- 52 -
Unit (2) Educational communication
Unit (2)
Educational Communication
- 13 -
Unit (2) Educational communication
Unit (2) Contents
1. Introduction
2. Relation between educational technology and
communication
3. Definition of educational communication
4. Educational communication combinations
5. Features of good communication process
6. Good educational communication
7. Educational communication languages
8. Importance of educational technology
9. Educational communication barriers
- 13 -
Unit (2) Educational communication
Introduction
Communication is one of the oldest aspects of human
activity, as it had been mentioned since the era of Greek
philosophers such as Aristotle and Socrates until it reached
the current era (social media networks), communication is
an organized process of sending and receiving messages
between the sender and the receiver through channels.

(2) Relation between educational technology
and communication
Educational technology plays the role of communication
channel between the sender and the receiver, by involving
all the learner's senses in the communication process, which
benefits the whole process.

(3) Definition of educational communication
Educational communication is an organized process of
sending and receiving educational messages between the
teacher and the students through channels
- 11 -
Unit (2) Educational communication
(4)Educational communication combinations
The educational communication elements consist
of the following:
Figure (51) Communication combinations
- 13 -
Unit (2) Educational communication
1st Sender (Teacher)
Is the source of the message, the teacher is the sender in
the educational communication process; the sender may
also be a computer software or a mobile application that
explains the educational content.

Figure (51) Bad educational communication sender
- 13 -
Unit (2) Educational communication
2nd Receiver (Learner)
It is the (person, persons, entity) the message is addressed
and made for, learner is the receiver in the educational
communication, the more the learner interacts, the more
effective the communication process.

Figure (51) Bad educational communication receiver
- 13 -
Unit (2) Educational communication
3rd Message (Syllabus)
It is verbal and non-verbal symbols that are formulated for
making a certain impact in the future. The message in the
educational communication process has specific and clear
educational goals.

Figure (51) Educational communication message misunderstanding
- 13 -
Unit (2) Educational communication
4th Channel
It is the tool that carries the message from the sender (the
teacher) to the receiver (the learner). Verbal explanation by
the teacher and listening by the learners is the common
communication channel in education, There are other
educational communication channels such as (textbook,
radio, television, computer, mobile) , Educational technology
strengthens and diversifies communication channels in the
educational communication process.

Figure (51) Bad communication channel
- 13 -
Unit (2) Educational communication
5th Feedback
It is the receiver reaction toward the message, and thus
shows how effective the message was, without it the sender
(teacher) cannot know the effect of the message on the
receiver (the learner).

Figure (22) Bad feedback
6th Communication environment
It is the medium in which the communication process is
carried out, such as (classroom, mobile device). Any bad
effect on the communication environment creates confusion
- 13 -
Unit (2) Educational communication
in the communication process, such as (external loud
voices, learner fatigue(
(5) Features of good communication process
The following elements must be present for the
success of the communication process:
Features of good communication
process
Purposeful
Dynamic
Organized
Circular
Figure (25) Features of good communication process
- 34 -
Unit (2) Educational communication
1st Purposeful
Good communication aims to achieve a specific goal: To
send information and data from the Sender (teacher, book,
computer program) to the learner, so behavioral goals must
be defined during the planning of the communication
process.

2nd Dynamic
There must be an interaction between the sender and the
receiver together. A failed connection is one in which the
learner is not active
3rd Organized
It must be an orderly process, as the sender sends and the
receiver receives, so it is not appropriate that the length of
time be only two senders or only two receivers.

- 33 -
Unit (2) Educational communication
4th Circular
It should be a circular process, in which the sender sends
the message and then receiver receives then receiver sends
a feedback to the sender to build a new communication.

(6) Good educational communication
The
following
figure
represents
a
good
educational
communication:
Figure (22) Good communication process
 There is Circular communication between the sender
and the receiver.
- 33 -
Unit (2) Educational communication
 There are clear roles of both sender and receiver.
 There is double feedback
(7) Educational communication languages
The educational communication languages are divided into
the following:
Educational communication
languages
Non-verbal
language
Verbal language
Body language
Oral
extra elements
Written
Figure (22) Educational communication language
- 31 -
Unit (2) Educational communication
1st Verbal language
They are verbal codes that include (listening & speaking) ,
and also written symbols that include (reading & writing).

2nd Non-Verbal language
They are the body language (facial expressions, hand
movements) , and also physical tools, which all of them is
used use as confirmatory tools for verbal language
(8) Importance of educational technology
Educational
Communication
has
a
great
importance in educational process, including the
following:
 Increase the interaction between the teacher and the
learner, thereby improving the educational process.
 Improving the quality of education and increasing its
effectiveness.
 Deepening learners' experiences.
- 33 -
Unit (2) Educational communication
 Development of the ability to think and be creative.
 To strengthen the learner's talents
(9) Educational communication barriers
The following problems cause barriers to the
educational communication process:
 Then the teacher use traditional methods that bored
the learner
 Not taking into account the individual differences
between the learners, as there may be some of them
who cannot keep up with the communication process
and thus fail with it.
 Distraction of learners during the explanation due to
boredom
 Bad classroom conditions (poor ventilation, damaged
microphone, crowding.
 Lack of the teacher's academic or professional skills,
or both
- 33 -
Unit (2) Educational communication
 The presence of physical disabilities among learners
 The presence Fusion in the classroom, either internal
fusion among learners due to (illness, anxiety), or
external
due
to
(conditions
of
communication
environment)
 Weak communication skills of the teacher or learner,
or both
- 33 -
Unit (3) Educational Systems
Unit (3)
Educational Systems
- 74 -
Unit (3) Educational Systems
Unit (3) Contents
1. Introduction
2. Definition of system
3. Definition of educational system
4. Educational system combinations
5. Factors affecting the choice of educational
systems
6. Standards of a successful educational system
7. The relation between educational system and
educational technology
8. Definition of instructional design
9. Instructional design models
10. ADDIE model
- 74 -
Unit (3) Educational Systems
Introduction
Systems theory emerged in the aftermath of World War II
and spread in all fields as a way of thinking and a method
for analyzing data, education is one of fields that system
theory has affected
(2) Definition of system
It is an integrated whole resulting from the interaction of its
related parts to achieve specific outputs. It may be as large
as the solar system or as small as the cellular system, and
it may be part of a larger system such as the digestive
system that is part of the human body.

(3) Definition of educational system
It is the method to be followed when thinking about (solving
educational problems, producing educational resources).

- 74 -
Unit (3) Educational Systems
(4) Educational system combinations
The
educational
system
has the
following
components:
Figure (42) Educational system combinations
1st educational inputs
They are the basic components of the educational system
necessary to implement the treatment, and are divided into
material inputs such as fund , human resources inputs such
as students and teachers , moral inputs such as goals and
community values ,
and technological inputs such as
- 05 -
Unit (3) Educational Systems
educational aids and computer software , the quality of the
educational system depends on the efficiency of its inputs.

2nd Educational processes
It is the mechanism by which educational inputs are
transformed into outputs, which includes everything that
occurs within the educational system such as teaching,
scientific conferences, classroom activities.

3rd Educational outputs
It is the outputs of educational system, skillful graduates are
the main educational system output.

2th Boundaries
The region between the educational system and other
systems, such as the social and economic systems.

- 05 -
Unit (3) Educational Systems
5th Environment
It is all that surrounds the educational system such as
conditions and factors, whether existing at the classroom,
school or in the whole society
6th Feedback
It is the evaluation process which aims to give indications of
the objectives achievement
(5)
Factors
affecting
the
choice
of
educational systems
To choose an educational system, the following must
be observed:
- 05 -
Unit (3) Educational Systems
Factors affecting the choice
of educational systems
The kind of the educational
problem
Required learning goals
Available capabilities
Learner feature
Figure (42) Factors affecting the choice of educational systems
1st The kind of the educational problem
It is the one that determines the system required to solve
this problem. For example, for example if we have an
educational problem for students with special need such as
poor eyesight, , the logical solution will be to use an
- 05 -
Unit (3) Educational Systems
educational system that relies on books written in Braille
and to use audio technology as recording digital audio
lectures and using computer programs that read written
texts in a clear voice.

2nd Required learning goals
The required learning outcomes determine the educational
system used, for example the goal of the ancient Spartan
community was to make every male become a soldier in the
army, so the Spartan educational system relied on
separating male children from their parents and engaging
them in military training camps since childhood.

3rd Available capabilities
It has a major role in choosing the educational system, for
example in China, which is the largest country in the world
in population, and it has many poor areas, the educational
system there depends on the establishment of mobile
schools (transport cars with books and teachers traveling
- 07 -
Unit (3) Educational Systems
between villages), In addition to encouraging students to
complete their studies system provides financial support and
also introducing realistic educational curricula related to their
lives, such as agricultural courses in addition to the
traditional courses
2th Learner feature
It has a fundamental role in determining the educational
system followed. For example, in India, the country that has
many religions, poverty is rampant : children are forced to
engage in work early and leave education , so the Indian
educational
system
depends
on
the
comprehensive
curriculum that focuses on practical life, such as focusing on
professional skills by using technology sources
(6) Standards of a successful educational
system
A successful educational system must contain several
criteria, the most important of which are
- 00 -
Unit (3) Educational Systems
 The ability to successfully complete a learning
process.
 Study the teaching curricula and their impact on the
success of the teaching and learning process.
 Ability to give follow-up by parents
 Giving workers in the educational system a role in
making academic decisions.
 Developing skills of workers in the educational
system.
 Providing students with early Technical skills
 Relying on advanced technology and systems that
raise the efficiency of students and teachers.

(7)
The
relation
between
educational
system and educational technology
The
relationship
between
educational
systems
and
educational technology is that Design (instructional design)
is one of educational technology combinations, and
- 05 -
Unit (3) Educational Systems
educational systems is based on the (design) process that
based on (inputs, outputs and processes) , and instructional
design make the link between educational technology and
educational systems
(8) Definition of instructional design
It is a branch of science that describes procedures related
to the selection of the educational material (tools, aids,
programs,
and curricula)
to be designed,
analyzed,
organized, developed and evaluated in order to make
educational programs and curricula that help to learn better
and faster and to help the teacher to follow the best
educational methods in the least time and effort possible.

(9) Instructional design models
It is a chart representing the pattern that should be used to
shape (curricula, educational aids, a complete system) , to
guide teaching in (classroom , course , system) , and to
achieve educational goals and objectives .
- 04 -
Unit (3) Educational Systems
(10) ADDIE model
Most instructional models consistent in the presence of five
main stages, that could be grouped in a standard model
(ADDIE Model) as shown in the following figure:
Figure (42) ADDIE model
(Analysis , Design , Development , Implementation , Evaluation)
1st Analysis
Educational design process begins with the analysis of an
educational situation, at this stage: the Main educational
- 04 -
Unit (3) Educational Systems
problem is identified; Educational environment, learners and
main educational goals are analyzed.

4nd Design
At this stage, a system design is developed through
analyzing the academic contents , defining behavioral goals,
defining methods of assessment, and designing a teaching
scheme
3rd Development
At this stage, the educational resources is collected, that will
be used in the educational situation with the aim of forming
learners' experiences .

2th Implementation
It is the stage of the actual arrival of the educational
situation, meaning that
teaching process is carried out
using the designed system
- 04 -
Unit (3) Educational Systems
2th Evaluation
At this stage, students are evaluated and the educational
system itself is evaluated too . Accordingly, decisions are
made regarding the entire educational process
- 55 -
Unit (4) Educational aid
Unit (4)
Educational Aid
- 16 -
Unit (4) Educational aid
Unit (4) Contents
1. Introduction
2. Definition of educational aids
3. Classification of teaching aids
4. Definition of educational aids
5. Classification of teaching aids
o according to The senses (audio, visual,
audiovisual, multi)
o according to Number of users (individual,
group, mass)
o according
to
Learner
involvement
(Dynamic, Static)
o according to Operation (with devices,
without devices, double)
o according to Availability (ready, made)
- 16 -
Unit (4) Educational aid
o according to its role in education (major,
complementary, enrichment)
o according
to
Production
method
(electronic, mechanical, manual)
6. Criteria for selecting and evaluating educational
aids
7. The importance of educational aids
8. Criteria for selecting and evaluating educational
aids
9. The importance of educational aids
- 16 -
Unit (4) Educational aid
Definition of educational aids
Any tool that the teacher or learner uses to improve
teaching and learning process
)2( Classification of teaching aids
Teaching aids classifacation
The senses (audio, visual, audiovisual, multi)
Number of users (individual, group, mass)
Learner involvement (Dynamic, Static)
Operation (with devices, without devices, double)
Availability (ready, made)
Its role in education (major, complementary,
enrichment)
Production method (electronic, mechanical,
manual)
Figure (22) Teaching aids classification
- 16 -
Unit (4) Educational aid
1st Classifying teaching aids according to
according to Senses
A - Audio Aids
It only depends on Sense of hearing, such as radio, school,
digital audio lectures and podcasting.

Figure (22) Podcasting mobile application (Google LLC)
B – Visual Aids
It only depends on Sense of sight, sight such as textbook,
pictures, graphics, and infographic.

- 16 -
Unit (4) Educational aid
Figure (22) An example of infographic
C – Audiovisual Aids
It depends on both Senses of sight and hearing such as TV,
video tutorials, animations, and motion graphics
Figure (03) An example of motion graphic
- 11 -
Unit (4) Educational aid
D – Multi senses Aids
It depends on more than just hearing and sight such as
educational trips, museums, and virtual reality
Figure (03) A virtual reality device consisting of (Vision glasses,
Headphones, Movement sensors)
- 16 -
Unit (4) Educational aid
2nd Classifying teaching aids according to
according to number of users
A – Individual Aids
It is used by one individual user , such as a computer
microscope, laptop and mobile phone
Figure (02) Mobile phone
B – Group Aids
It is used to teach a group of learners who are in one place
such as language lap, and data show projector.

- 16 -
Unit (4) Educational aid
Figure (00) Data show projector
C – Mass Aids
It is used to teach unlimited group of learners who are in
different places TV shows, websites, and social networks.

Figure (03) Facebook logo
- 19 -
Unit (4) Educational aid
3rd Classifying teaching aids according to
according to number of learner involvement
A – Static Aids
Its only role is to present content and do not employ learner
interaction such as radio, video tutorial, and projector
devices like slide projector.

Figure (03) classroom with slide projector
- 67 -
Unit (4) Educational aid
B – Dynamic Aids
It presents content and employ learner interaction such as
Educational
computer
software
,
educational
educational museums and smart board.

Figure (03) smart board
- 66 -
trips,
Unit (4) Educational aid
3th Classifying teaching aids according to
according to operation
A – View-with-Devices Aids
It depends on electronic device, Such as electronic lectures,
computer programs, digital educational films and mobile
applications
Figure (02) musical educational film
B – View-without-Devices Aids
It does not need any device to deal with, Such as
Educational boards and educational samples
- 66 -
Unit (4) Educational aid
Figure (02) Educational samples of a group of precious stones
C – Double-View Aids
It can be viewed with or without devices, such as
educational graphics and images that can be printed or be
inside the mobile's memory
- 66 -
Unit (4) Educational aid
Figure (02) Educational graphics
3th Classifying teaching aids according to
according to availability
A – Ready-Use Aids
The teachers does not make it, they only select it according
to the educational situation, such as a microscope and
children's cubes
- 66 -
Unit (4) Educational aid
Figure (02) children's cubes
B – Made Aids
It is made by the teacher and educational aids specialist ,
such as educational software , PowerPoint lectures..

Figure (33) Microsoft PowerPoint interface
- 66 -
Unit (4) Educational aid
6th Classifying teaching aids according to
according to its role in education
A – Major Aids
It is the major educational aid in teaching process such as
the chalkboard in most schools and universities
Figure (33) chalkboard
B – Complementary Aids
Used as a teaching supplement, such as using a
microscope to study tissue
- 61 -
Unit (4) Educational aid
Figure (32) microscope
C – Enrichment Aids
It is used as an additional teaching method, such as the use
of museums in history courses
Figure (32) museum
- 66 -
Unit (4) Educational aid
6th Classifying teaching aids according to
according to production method
A – Electronic Aids
It uses modern technology in its industry, such as
computers, mobile applications and smart board
Figure (32) Educational electronic devices
- 66 -
Unit (4) Educational aid
B – Mechanical Aids
It uses mechanical and traditional part such as models and
educational models
Figure (30) Solar system model
C – Manual Aids
It is the hand tools that both the teacher and the learner use
such as the science laboratory tools and transparencies
- 69 -
Unit (4) Educational aid
Figure (33) educational transparencies
Note:
One educational aid can be classified into more than one
category. For example (mobile) is an educational tool which
is (multi senses, individual, dynamic, view-with device,
ready-use , ,major , electronic)
- 67 -
Unit (4) Educational aid
)3( Criteria for selecting and evaluating
educational aids
 Achieve educational goals
 Integrated with the teaching method
 Take into account the level of the learners and their
abilities
 The teacher has the skill to use it
 Take into account the number of learners in the
educational situation
 Not a substitute for a teacher
 Characterized by accuracy, and modernity
 In good art form
 Attracts students' attention and interests
 safe effort, time and cost
- 66 -
Unit (4) Educational aid
)3( The importance of educational aids
 It overcomes verbality by employing multiple senses.
 Facilitates learner awareness of experiences.
 Reduces monotony and boredom.
 Maintain and store experience.
 Diversity of reinforcement methods.
 Facing individual differences.
 Arranging the learner's thoughts.
 Modify behavior and composition trends.

- 66 -
Unit (5) Computer System
Unit (5)
Computer System
- 38 -
Unit (5) Computer System
Unit (5) Contents
1. Definition of computer system
2. Computer hardware
o Input units
o Outputs units
o Processing units
o Storage units
3. Computer software
o Operating systems
 Definition of operating systems
 Functions of operating systems
o Applications
 Definition of applications
 Examples of applications
- 38 -
Unit (5) Computer System
Computer system
The hardware and software components of a computer that
come together to perform its functions
Computer System
Hardware
Input units - Outpot unit , Processing unis Storage units
Software
Operating system , Applications
Figure (54) computer system
- 38 -
Unit (5) Computer System
(1st ) Computer hardware
Computer hardware is the physical parts or components
of a computer, such as the monitor, keyboard, computer
data storage, graphic card.

1 - Input units
It is a group of computer hardware devices that enter
data, such as mouse and keyboard:
Figure (54) computer input units
- 38 -
Unit (5) Computer System
A- Computer mouse:
It is a hand-held pointing device that detects twodimensional (2D) motion relative to a surface. This
motion is typically translated into the motion of
a pointer on a display, which allows a smooth control of
the graphical user interface of a computer.

B- Computer Keyboard:
It
is
a
typewriter-style
device
which
uses
arrangement of buttons or keys to write letters.

- 38 -
an
Unit (5) Computer System
2- Outputs units
It is a group of computer hardware devices that show
data, such as monitor and printer:
Figure (54) computer output units
A- Computer display:
It is an output device that displays information in a
visual form like TV.

- 33 -
Unit (5) Computer System
B- Computer Printer:
it is a peripheral device which makes graphics and text
on paper.

3- Processing units
A central processing unit (CPU), also called a central
processor or main
processor,
is
the electronic
circuitry within a computer that executes instructions that
make up a computer program.

Figure (54) computer process units
- 38 -
Unit (5) Computer System
4- Storage units
It is a group of computer hardware devices that store
data, such as RAM, ROM , external storage devices:
Figure (54) computer storage units
- 89 -
Unit (5) Computer System
A- Random Access Memory (RAM) :
Stores the code and data that are being actively
accessed by the CPU , when data is not active it clears
automatically from RAM.

B- Read Only Memory (ROM):
Stores the BIOS that runs when the computer is
powered on or otherwise begins execution in a process
known by (Booting).

C- External Storage Devices:
It is any computing hardware or digital media that is
used for user application storing , such as hard disk ,
memory card and flash memory.

- 89 -
Unit (5) Computer System
(2nd) Computer software
Software is instructions that can be stored and ran by
hardware; it is either to be operating system or
applications.

1- Operating systems
An operating system (OS) is system software that
manages computer hardware, software resources, and
provides common services for computer programs ,
such as (windows , Unix) for desktop computer , and
(Android) for mobile and tablets.

- 89 -
Unit (5) Computer System
Figure (45) Operating Systems (OS)
Functions of operating systems
 It manages the hardware and software resources
of the system.
 It
provides
a
stable,
consistent
way
for
applications to deal with the hardware without
having to know all the details of the hardware.

- 88 -
Unit (5) Computer System
2- Applications
Software is instructions that can be stored and ran by
hardware
Examples of applications
A- Runtimes Applications
They are complementary programs for
operating
system, such as WinRAR which is used to compress
files.

Figure (45) Runtime applications
- 88 -
Unit (5) Computer System
B- Office Applications
Programs used in most administrative works such as
Microsoft Office package which includes MS Word for
word
processing,
MS
PowerPoint
to
create
presentations, MS Excel for accounting and MS Access
for databases
Figure (45) Microsoft office applications
- 88 -
Unit (5) Computer System
C- Graphic Applications
Programs used in Artistical works such as Adobe
package which includes Photoshop for image editing,
Illustrator to create Graphics, Premiere for video editing.

Figure (45) Adobe applications
- 88 -
Unit (5) Computer System
D- Antivirus Applications
Programs used to scan viruses from computer for
deleting it
Figure (45) Anti-Virus applications
- 88 -
Unit (5) Computer System
E- Maintenance Applications
Programs used to perform computer repair tasks, such
as processing bad sectors applications.

Figure (44) Maintenance applications infographic
- 83 -
Unit (5) Computer System
F- Educational Applications
Programs
specifically
designed
for
educational
purposes, such as electronic dictionaries, and coursetutorial applications
Figure (44) Educational applications interface
- 88 -
Unit (5) Computer System
F- Internet Applications
Programs designed for dealing with internet, such as
web navigators
Figure (44) Educational applications interface
- 999 -
Unit (6) Internet
Unit (6)
Internet
- 101 -
Unit (6) Internet
Unit (6) Contents
1. Internet
2. Reasons for the widespread use of the Internet
3. Examples
of
internet
education
o Search Engines
o E-Mail
o Web Sites
o Portals
o Social networks
o Video Websites
o Databases
o Web Translation
- 102 -
services
used
in
Unit (6) Internet
Internet
The Internet is a very large global computer network, linking
networks and computers around the world.

(2) Reasons for the widespread use of
the Internet
Internet usage has spread for the following
reasons:
 Speed of communication through it
 It allows publishing content in any language, taking in
mind that English language has created a common
ground of understanding between users.
 Multiple uses in all fields, as it has spread to all areas of
life
 It is free to use, resulting in the ability to reach more
audiences
 Its use does not require a specific type of computer or a
specific operating system type
- 103 -
Unit (6) Internet
(3) Examples of internet services used in
education
Educational Internet Services
Search Engines
E-Mail
Web Sites
Portals
Social networks
Video Websites
Databases
Web Translation
Figure (58) examples of internet educational services
- 104 -
Unit (6) Internet
1st - Search Engines
Figure (59) search engines
Web sites help users to access other internet sites by
writing a search word instead of writing full name of the site.
Search engines are used education by employing them to
access educational websites and download educational
books and educational resources, examples of search
engines (Google, Yahoo, Ask, AOL, Baidu, Wolfarm Alpha,
DuckDuckgo).

- 105 -
Unit (6) Internet
2nd - E-Mail
Figure (60) E-Mail providers
It is a program developed by Professional technical
companies, which benefits useres in sending and recieving
electronic messages at a very fast speed that includes text,
pictures and small files, email is used in education as a
medium between the teacher and the learner in sending
assignments and academic duties and as an official means
of communication between different educational institutions,
one of the most famous Email providers (Google Mail,
Yahoo Mail, Microsoft Hotmail, Microsoft Outlook, GMX,
Facebook Mail, Inbox, Yandex, AOL Mail)
- 106 -
Unit (6) Internet
3rd - Web Sites
Figure (61) Educational web sites
They are pages that contain images and text , they are
dealt with through Internet browsers such as Google
Chrome, their current number are more than 580 million
multi-purpose sites, they are used in education by creating
a website that explains educational material whether it is
related to courses for a specific stage or Explaining culturaleducational material in general.

- 107 -
Unit (6) Internet
4th - Portals
Figure (62) Portal of Minia University
They are websites belonging to a specific educational
institution (school, academy, university), they are used by
users to access all educational services provided by the
institution, such as applying to courses paying expenses.

- 108 -
Unit (6) Internet
5th - Social networks
Figure (63) the most famous social networks
They are websites of the second generation (Web2) used in
the processes of participation and exchange of social news
between members of the community. Social networks are
used in education through the creation of (course ,
classroom , institution) e-groups for that allow educational
communication between the parties to the educational
process
(student,
teacher,
administration,
parents)
,
assignments and lessons can be sent across those groups .

- 109 -
Unit (6) Internet
6th - Video Websites
Figure (64) the most famous Video Websites
They are social networks, but it is specific to video clips,
they allow users to search for a video file to view by using
search words, its services are free and in most languages of
the world, it is used educationally providing lectures and
practical experiences, through direct viewing in those sites,
through their participation On other websites and social
networks or by downloading videos directly
- 110 -
Unit (6) Internet
7th - Databases
Figure (65) Egyptian knowledge bank (EKB)
Web sites contain a huge number of educational resources
such as books and academic researches which stored by
PDF format , these sites contain internal search engines
that allow the user to search for the source in terms of (title,
author, history or words in the content ) to show download
links for it , some of these sites offer Its services free of
charge, some are for a fee, and others offer some of their
contents for free and some for a fee.

- 111 -
Unit (6) Internet
8th - Web Translation
Figure (66) Google translate logo
Web sites that provide immediate electronic translation from
one language to another, they also offer related several
meaning of the same term , they are used in education at
language scientific courses
- 112 -
Unit (8) Education
Unit (7)
Education
- 113 -
Unit (8) Education
Unit (7) Contents
1. Education
2. Formal education
3. Formal Education Stages
a. Preschool
b. Kindergarten
c. Primary school
d. Preparatory School
e. Secondary school or High school
f. University
- 114 -
Unit (8) Education
Education
Education is a form of learning in which the knowledge
, skills , values, beliefs and habits of a group of people are
transferred from one generation to the next through
storytelling, discussion, teaching, training, and research.

(2) Formal education
Formal education occurs in a structured environment whose
explicit purpose is teaching students.

Figure (67) Some students in a classroom
Usually formal education takes place in a school
environment, with classrooms of multiple students
learning together with a trained teacher.

- 115 -
Unit (8) Education
School System includes curriculum, classroom, studentteacher interactions, and methods of assessment,
educational activities, and more.

(3) Formal Education Stages
Education is commonly divided into those stages:
Pre-School
Kindergarten
Primary
Preparatoy
Secondary
1 year
2 years
6 years
3 years
3-5 years
not a basic
education
stage
not a basic
education
stage
1st basic
education
stage
2nd basic
education
stage
last school
education
stage
University
4-7 years
+ Post
graduate
last formal
stage
Figure (68) Educational Technology historical evolution stages
- 116 -
Unit (8) Education
1st – Preschool
Figure (69) Some kids in preschool
 Provides one school year.
 It is not considered as a basic education stage in
Egypt.

 Kids there just spend fun times playing, they may
learn songs and how to read some letters.

- 117 -
Unit (8) Education
2nd - Kindergarten
Figure (70) Some kids in Kindergarten
 Provides two school years.
 It is not considered as a basic education stage in
Egypt.

 Kids learn how to read and write during playing
activities.

- 118 -
Unit (8) Education
3rd - Primary school
Figure (71) Some kids in Primary school
 Provides six school year.
 It is the first stage of basic education in Egypt.
 Kids learn basic courses like science and social
studies.

 It consists of six years of education.

- 119 -
Unit (8) Education
4th - Preparatory School
Figure (72) Some teens in Preparatory school
 Provides three school years.
 It consists of three years of education.
 It is the second stage of basic education in Egypt.
 Kids learn more complex courses like history and
geography.

- 121 -
Unit (8) Education
5th - Secondary school or High school
Figure (73) Some youth/teens in secondary school
 Provides three to five school year .
 It consists of three years of education.
 It is the last stage of school education in Egypt.
 Students learn more complex courses like chemistry,
physic, biology, psychology, geology and different
braches of mathematics.

 In Egypt this stage is the most important because it
qualifies students to university.

 There are two types of secondary education (general,
technical)
- 121 -
Unit (8) Education
6
th
(Last Stage) University
Figure (74) Minia University
 This stage of formal education is responsible for
career because every job require a specific faculty
graduation and certificates.

 Some faculties has 4 years education like specific
education , tourism and sciences , 5 years (fine arts
and engineers ) , 6 (faculty of pharmacy and dentist)
, 7 years like faculty if medicine .

 Students learn everything they need to be able to be
face with living requirement in society.

 University
studies
include
postgraduate
(diploma, masters, PhD) at any faculty.
- 122 -
studies
Unit (8) Research Writing Directives
Unit (8)
Research Writing
Directives
- 321 -
Unit (8) Research Writing Directives
Unit (8) Contents
1. Writing instructions
2. Writing Sequence
3. Writing Regularity
4. Writing Non Literary
5. Facts and Opinions
6. Writing correct sentences
a. Grammar
b. Comma splice
c. SHIFTS
d. Gender Referents
7. Capitalization
8. Commas
9. Writing Three Parts of the paragraph
a. Topic Sentence
b. Supporting Details
c. Closing Sentence
10. Using Examples
- 321 -
Unit (8) Research Writing Directives
Writing instructions
 Introduce
the
main
idea
of
the
chapter/section/paragraph
 Explain and expand the idea, defining any key
terms.

 Present
relevant
evidence
to
support
your
point(s).
 Comment on each piece of evidence showing how
it relates to your point(s).

 Conclude your chapter/section/paragraph by either
showing its significance to the report as a whole
or
making
a
link
to
the
next
chapter/section/paragraph.

Writing Sequence
 The whole information can divide it into chapters,
units or any classification you want.
 You must make titles and sub titles
 You may numbering heads of topics to make it
easy to be referred
- 321 -
Unit (8) Research Writing Directives
 Explaining information from easy to difficult and
from first to last
Writing Regularity
 Explaining information from easy to difficult and
from first to last
 Unification of font (style – size – titles – subtitles)
at all parts of the report
 Unification of paragraph (spacing – size – titles –
subtitles) at all parts of the report
 Every paragraph has its own details and the same
information must not be scattered at several
places
Writing Non Literary
Ensure that the style of writing, especially scientific
and technical reports and business must be balanced
away from the language of exaggeration or excessive
literary analogies.

- 321 -
Unit (8) Research Writing Directives
Facts and Opinions
Facts and Opinions are really different in the sense
People sometimes find it hard to make a distinction
between
a
fact
and
an
opinion.

The
right
understanding of the difference between fact and
opinion is needed to evaluate things and to make
judgments.

 Definition of Opinion:
Opinions is only just a thought or speculation
 Notes about Opinion:
1. Opinion is only a belief.
2. Opinion has no backing of any evidence
3. Opinion cannot be proved to be true
4. Writers often use facts to support their opinions
 Examples:
1. Fruits is delicious
2. Cats are so bad
- 321 -
Unit (8) Research Writing Directives
 Definition of fact:
According to the Webster’s Dictionary, the fact is
“anything that is done or happened; anything actually
existent; any statement strictly true; truth; reality” and
opinion is something that “indicates a belief, view,
sentiment, or conception.”
 Notes about fact:
1. Fact is something that is true.
2. Fact is supported by evidence
3. Facts can be proved to be true
4. Statements that contain statistics tend to be facts
5. Writers often use facts to support their opinions
 Examples:
1. Fruits contains vitamins
2. Cats is a part of nymphs family
- 321 -
Unit (8) Research Writing Directives
Writing correct sentences
Master the essentials of the sentence as an aid to
clear thinking and effective writing. Writing a good
sentence is an art, and you can master that art by
developing your awareness of what makes a
sentence work. As you become more familiar with
the relationships among sentence elements, you will
strengthen your writing skills and will be better able
to make your meaning clear to your reader
 Grammar:
Grammar must be followed in writing reports; Avoid
mistakes will avoid reduction the value of work
Example:
A singular subject takes a singular verb, and a plural
subject takes a plural verb.
o Singular: The car in the lot looks shabby. [car
looks]
- 321 -
Unit (8) Research Writing Directives
o Plural: The cars in the lot look shabby. [Cars
look]
 Comma splice and fused (or run-on)
sentence
Do not link two main (independent) clauses with only a
comma (comma splice) or run two main clauses together
without any punctuation fused sentence.

Examples:
o Fused Sentence: The wind was cold they decided
not to walk. (Not correct sentence)
o Comma Splice: The wind was cold, they decided
not to walk. (Correct sentence)
 SHIFTS
Avoid needless shifts in person and number.
Shift: If a person is going to improve, you should
work harder. [Shift from third person to second
person]
- 311 -
Unit (8) Research Writing Directives
Better: If we are going to improve, we should work
harder. [First person]
OR: If you are going to improve, you should work
harder. [Second person]
OR If people are going to improve, they should work
harder. [Third person]
 Gender Referents
Avoid
awkward
“his/her”
and
“he/she”
gender
constructions.
Awkward: The client is usually the best judge of his
or her counseling.
Better: The client is usually the best judge of the
value of counseling. [Omit gender referents.]
OR: Clients are usually the best judges of the value
of the counseling they receive. [Change to plural]
OR: The best judge of the value of counseling is
usually the client. [Rephrase the sentence.]
- 313 -
Unit (8) Research Writing Directives
Capitalization
Capitalization is the writing of a word with its first
letter in uppercase and the remaining letters in
lowercase. Experienced writers are stingy with
capitals. It is best not to use them if there is any
doubt
 Examples:
1. the Golden Gate Bridge
2. the Grand Canyon
3. a Russian song
4. a Shakespearean sonnet
5. a Freudian slip
 Capitalization Reference List
1. Brand names
2. Companies
3. Days of the week and months of the year
4. Governmental matters
Congress
(but
congressional),
the
U.S.

Constitution (but constitutional), the Electoral
- 312 -
Unit (8) Research Writing Directives
College, Department of Agriculture. Note: Many
authorities do not capitalize federal or state unless
it is part of the official title: State Water Resources
Control Board, but state water board; Federal
Communications
Commission,
but
federal
regulations.
5. Historical episodes and eras
the Inquisition, the American Revolutionary War,
the Great Depression
6. Holidays
7. Institutions
Oxford College, the Juilliard School of Music
8. Manmade structures
the Empire State Building, the Eiffel Tower, the
Titanic
9. Manmade territories
Berlin, Montana, Cook County
10. Natural and manmade landmarks
Mount Everest, the Hoover Dam
- 311 -
Unit (8) Research Writing Directives
11. Nicknames and epithets
Andrew "Old Hickory" Jackson; Babe Ruth, the
Sultan of Swat
12. Organizations
American Center for Law and Justice, Norwegian
Ministry of the Environment
13. Planets
Mercury, Venus, Mars, Jupiter, Saturn, Uranus,
Neptune, but policies vary on capitalizing earth,
and it is usually not capitalized unless it is being
discussed specifically as a planet: We learned that
Earth travels through space at 66,700 miles per
hour.
14. Races, nationalities, and tribes
Eskimo, Navajo, East Indian, Caucasian, and
African American (Note: white and black in
reference to race are lowercase)
15. Religions and names of deities
16. Note: Capitalize the Bible (but biblical). Do not
capitalize heaven, hell, the devil, satanic.
- 311 -
Unit (8) Research Writing Directives
Commas
Commas and periods are the most frequently used
punctuation marks. Commas customarily indicate a
brief pause; they're not as final as periods.

 Rule 1:
Use commas to separate words and word groups in a
simple series of three or more items.

 Examples:
o My estate goes to my husband, son, daughter-inlaw, and nephew.

o We had coffee, cheese and grapes.
"Adding a comma after crackers makes it clear that
cheese and crackers represent one dish.

 Rule 2:
Use a comma to separate two adjectives when the order
of the adjectives is interchangeable.

- 311 -
Unit (8) Research Writing Directives
 Example:
He is a strong, healthy man
 Rule 3:
If something or someone is sufficiently identified, the
description that follows is considered nonessential and
should be surrounded by commas
 Example:
Freddy, who has a bus, was in an auto accident
- 311 -
Unit (8) Research Writing Directives
Writing Three Parts of the
paragraph
Any paragraph has three parts or three sentences:
1. Topic sentence
2. Supporting Details
3. Closing Sentence
 Topic Sentence
What is the topic sentence?
The topic sentence is the first sentence in a paragraph.

What does it do?
It introduces the main idea of the paragraph.

How do I write one?
Summarize the main idea of your paragraph. Indicate to
the reader what your paragraph will be about.

- 311 -
Unit (8) Research Writing Directives
Example:
There are three reasons why Egypt is one of the best
tourism
countries
moderate.

Second,
in
the
world. First,
Egypt
has
weather
different
is
climates
(beaches, mountains and deserts, agricultural areas and
urban areas). Finally, Egypt has the greatest monuments
in the world. As a result, Egypt is a desirable place to be
a tourist destination.

 Supporting Details
What are supporting sentences?
They come after the topic sentence, making up the body
of a paragraph.

What do they do?
They give details to develop and support the main idea
of the paragraph.

How do I write them?
You should give supporting facts, details, and examples.
- 311 -
Unit (8) Research Writing Directives
Example:
There are three reasons why Egypt is one of the best
tourism
countries
moderate.

in
the
Second,
world. First,
Egypt
has
weather
different
is
climates
(beaches, mountains and deserts, agricultural areas and
urban areas). Finally, Egypt has the greatest monuments
in the world. As a result, Egypt is a desirable place to be
a tourist destination.

 Closing Sentence
What is the closing sentence?
The closing sentence is the last sentence in a
paragraph.

What does it do?
It restates the main idea of your paragraph.

How do I write one?
Restate the main idea of the paragraph using different
words.
- 311 -
Unit (8) Research Writing Directives
Example:
There are three reasons why Egypt is one of the best
tourism
countries
moderate.

Second,
in
the
world. First,
Egypt
has
weather
different
is
climates
(beaches, mountains and deserts, agricultural areas and
urban areas). Finally, Egypt has the greatest monuments
in the world. As a result, Egypt is a desirable place to be
a tourist destination.

- 311 -
Unit (8) Research Writing Directives
Using Examples
 Using examples to back up statements of fact can add
value to your writing. Making a statement without using
examples can make your writing muddy, as well as
create more work for the reader.

 Examples make statements clearer, give readers more
information, and decrease the chances that the fact or
idea to be wrongly applied to real-life situations.

 Examples are most successful when integrated into the
text:
o Warm paint colors, like red or pink, can have a
stimulating effect on a room’s inhabitants.

o When going to a formal dinner, it is important to
wear your best suit, tie, and shoes. (Rather than:
When going to a formal dinner, it is important to
wear your best clothing.)

 Examples can also be added in parenthetical phrases,
using Latin abbreviations:
o When you go camping, always make sure to pack
first-aid
supplies
(e.

example”]bandages,
g. [exempli
antiseptic
medication).

- 313 -
gratia or
cream,
“for
pain
Unit (8) Research Writing Directives
o Examples can also be illustrated by describing
hypothetical situations, relating real-life situations, or
giving the reader possibilities to imagine within the
context of the article.

- 312 -
Unit (9) Translation Directives
Unit (9)
Translation Directives
- 341 -
‫‪Unit (9) Translation Directives‬‬
‫‪Unit (9) Contents‬‬
‫‪ .3‬انترجمت إنى جمم فعهيت‬
‫‪ .2‬انترجمت إنى انمبىى نهمجهىل وإنى انمبىي نهمعهىو‬
‫‪ .1‬تخطي انمعىى األول نهكهمت‬
‫‪ .4‬مكبن فعم انقىل في انجمهت االوجهيزيت‬
‫‪ .5‬معرفت معىى انمصطهح‬
‫‪ .6‬االخطبء انهغىيت انشبئعت‬
‫‪ .7‬ترجمت انعىىان‬
‫‪ .8‬متببعت انمصطهحبث انمستحذثت‬
‫‪ .9‬انترجمت انشبئعت وانترجمت انكبمهت‬
‫‪ .31‬انتخفيف انهفظي‬
‫‪ .33‬هجبء االسمبء انشهيرة‬
‫‪ .32‬اختالف انمعبوي وفق حبنت انحرف (كبير ‪ ،‬صغير)‬
‫‪ .31‬ترجمت عىبويه انمقبالث‬
‫‪ .34‬ترجمت انتعبيراث واألمثبل‬
‫‪ .35‬ترجمت انمفرد وانجمع‬
‫‪ .36‬انتعبيراث االصطالحيت‬
‫‪- 344 -‬‬
‫‪Unit (9) Translation Directives‬‬
‫‪Translation Directives‬‬
‫‪ -1‬تترجم معظم جمل المغة اإلنجميزية إلى جمل فعمية في معظم األحوال ماعدا‬
‫بعض الجمل‪:‬‬
‫‪Salih passed the exam‬‬
‫نجح صالح في االختبار‬
‫‪-2‬تترجم الجمل المبنية لممجهول في اإلنجميزية كجمل مبنية لممجهول في‬
‫المغة العربية إذا كان الفعل شائعا‪.‬‬
‫‪The meeting was cancelled‬‬
‫ألغي االجتماع‬
‫أما إذا لم يكن شائعا فتتحول إلى مبني لممعموم‪:‬‬
‫‪Ramadan is fasted by Muslims‬‬
‫يصوم المسممون رمضان‬
‫‪- 345 -‬‬
‫‪Unit (9) Translation Directives‬‬
‫‪-3‬ال يجب أن تتوقف معرفة المترجم بمعاني الكممات عند المعنى األول‬
‫لمكممة‪:‬‬
‫‪Customs department‬‬
‫ىيئة الجمارك (‪ customs‬تعني عرف أو عادات)‬
‫‪Health department‬‬
‫و ازرة الصحة (وليست إدارة الصحة)‬
‫‪ -4‬يأتي فعل القول في المغة اإلنجميزية بعد القول أما في المغة العربية يحدث‬
‫العكس‪:‬‬
‫‪"We fight swin flue" WHO official said‬‬
‫صرح مسئول منظمة الصحة العالمية قائال نحن نحارب أنفمون از الخنازير‬
‫‪-5‬يجب عدم االكتفاء بمعرفة الترجمة الصحيحة بل يجب عمى المترجم أن‬
‫يعرف معنى المصطمح‪:‬‬
‫‪Coalition government‬‬
‫حكومة ائتالفية = مؤلفة من عدة أحزاب‬
‫‪Territorial waters‬‬
‫المياه اإلقميمية = مياه في البحار تقع داخل حدود دولة‬
‫‪- 346 -‬‬
‫‪Unit (9) Translation Directives‬‬
‫‪-6‬عدم تكرار األخطاء المغوية الشائعة‪:‬‬
‫‪spirits‬‬
‫المشروبات المسكرة (ليست معنويات أو أوراح)‬
‫‪Previous Literatures‬‬
‫الدراسات السابقة (وليست االداب السابقة)‬
‫‪-7‬ال يجب ترجمة العنوان إال بعد قراءة النص‬
‫‪-8‬يجب عمى المترجم أن يتابع المصطمحات المستحدثة‪:‬‬
‫‪McDonaldization - Coca cola culture - Neologism‬‬
‫كل ما سبق يعني الثقافة األمريكية‬
‫‪-9‬عند ترجمة المختصرات يترجم الشائع منها كما هو بينما يجب أن تترجم‬
‫األخرى بشكل كامل‪:‬‬
‫‪The CNN aired a documentary film‬‬
‫أذاعت السي إن إن فمم وثائقي (تم ترجمتيا باالختصار الشائع)‬
‫‪The UNDP will hold a meeting in Jeddah‬‬
‫سوف يعقد البرنامج اإلنمائي اجتماعا في جدة (تم تفسيرىا بالمغة العربية ألنيا‬
‫ليست شائعة)‬
‫‪- 347 -‬‬
‫‪Unit (9) Translation Directives‬‬
‫‪-11‬يجب أن يراعي المترجم التخفيف المفظي (التعبير بمباقة)‪:‬‬
‫‪Gober died‬‬
‫ال يقال مات جبير وانما انتقل جبير إلى رحمة هللا‬
‫‪ -11‬يجب معرفة طريقة هجاء األسماء الشهيرة والمعالم الجغرافية ألنه ال‬
‫اجتهاد فيها‪:‬‬
‫طرابمس ‪Tripoli‬‬
‫دمشق ‪Damascus‬‬
‫أفالطون ‪Plato‬‬
‫‪-12‬تختمف معاني بعض الكممات إذا ما كتبت بحرف كبير عن ما إذا ما كتبت‬
‫بحرف صغير‪:‬‬
‫الصين ‪ - China‬طقم صيني ‪china‬‬
‫‪-13‬يجب أن تترجم عناوين المقاالت كجمل أسمية‪:‬‬
‫‪King Abdullah visits Syria‬‬
‫الممك عبد هللا في زيارة إاى سوريا‬
‫واذا اكنت جممو عادية وليست عنوان تكون ‪ :‬يزور الممك عبدهللا سوريا‬
‫‪- 348 -‬‬
‫‪Unit (9) Translation Directives‬‬
‫‪ -14‬يجب أن ينتبه المترجم إلى أن ترجمة بعض التعبيرات ليست حصيمة‬
‫الكممات التي تكون التعبير‪:‬‬
‫‪Yellow cake‬‬
‫اليورانيوم المخصب (وليست الكعك األصفر)‬
‫‪Love apple‬‬
‫طماطم (وليست التفاح الحب)‬
‫‪Sleeping policeman‬‬
‫مطب صناعي (وليست الشرطي النائم)‬
‫‪Pen name‬‬
‫اسم مستعار (وليست اسم القمم الجاف)‬
‫‪Good offices‬‬
‫مساعي حميدة (وليست المكاتب الجيدة)‬
‫‪-15‬ليس بالضروري دائما أن يترجم المفرد مفرد والجمع جمع‪:‬‬
‫‪Children are able to speak when they attain the age of three‬‬
‫يتمكن الطفل من التحدث عند بموغو سن ثالث سنوات‬
‫‪- 349 -‬‬
‫‪Unit (9) Translation Directives‬‬
‫‪ -16‬يجب أن يبحث المترجم في المغة المنقول إليها عما يعادل التعبير‬
‫االصطالحي في المغة المنقول منها‪:‬‬
‫‪I'll keep it under my hat‬‬
‫سرك في بئر‬
‫‪- 351 -‬‬
References
References
- 151 -
References
1. Maturity, Jonathan (April 2005). "Cyberterrorism:" American
Foreign Policy Interests 2: 137–147.
2. "India Quarterly: a Journal of International Affairs". 42-43.
Indian Council of World Affairs. 1986. p. 122. The difficulty of
defining terrorism has led to the cliché that one man's terrorist
is another man's freedom fighter
3. What is cyberterrorism? Even experts cannot agree at
the Way back Machine (archived November 12, 2009).
Harvard Law Record. Victoria Baranetsky. November 5, 2009.
4.

Harper, Jim. "There’s no such thing as cyber terriorism". RT.
Retrieved 5 November 2012.

5.

http://oai.dtic.mil/oai/oai?&verb=getRecord&metadataPrefix=
html&identifier=ADA439217
6.

White,
Kenneth
C.

(1998). Cyber-terrorism:
Modern
mayhem. U.S. Army War College. Retrieved 13 March 2015.
7.

Cyberterrorism National Conference of State Legislatures.

- 151 -
References
8. Gable, Kelly A. "Cyber-Apocalypse Now: Securing the Internet
against Cyberterrorism and Using Universal Jurisdiction as a
Deterrent" Vanderbilt Journal of Transnational Law, Vol. 43,
No. 1
9.

Anderson, Kent (October 13, 2010). "Virtual Hostage: Cyber
terrorism and politically motivated computer crime". The
Prague Post. Retrieved 2010-10-14.

10. "Top 10 events that may end the human race". Yahoo News.
Oct 27, 2010. Retrieved 2010-11-01.
11. Costigan, Sean (25 January 2015). "Cyber terrorism must be
jointly tackled". Sunday Guardian. Retrieved 12 March 2015.
12. Perlroth,
Nicole;
Sanger,
David
E.

(28
March
2013). "Corporate Cyberattacks, Possibly State-Backed, Now
Seek to Destroy Data". The New York Times.
13. "White House shifts Y2K focus to states, CNN (Feb. 23,
1999)". CNN. 23 February 1999. Retrieved 25 September
2011.

- 151 -
References
14. Chabrow, Eric. Obama Cybersecurity Coordinator Resigns.
GovInfoSecurity.com, May 17, 2012. Accessed: Feb. 11,
2014.
15. White
House
Names
New
Cybersecurity
Chief.

BreakingGov.com May 17, 2012. Accessed: Feb. 11, 2014.
16. McDonald,
Ryan.White House
Security
Chief
Warns.

Baltimore Biz Journal. January 29, 2014. Access date: Feb.
11, 2014.
17. Maryann
Cusimano
Love.(2011). Beyond
Sovereignty:
Issues for a Global Agenda. Wadsworth, Cengage Learning.
18. Yu, Eileen (27 May 2011). "China dispatches online
army". ZDNet Asia. Retrieved 3 June 2011. Geng Yansheng,
spokesperson for China's Defense Ministry, was quoted to say
that the PLA set up the cyberwar unit, or 'cyber blue team', to
support its military training and upgrade the army's Internet
security defense.

- 151 -
References
19. "China Confirms Existence of Elite Cyber-Warfare Outfit the
'Blue
Army'". Fox
News.

26
May
2011.

Retrieved 3
June 2011. China set up a specialized online 'Blue Army' unit
that it claims will protect the People's Liberation Army from
outside attacks, prompting fears that the crack team was being
used to infiltrate foreign governments' systems.
20. Ayers, Cynthia (September 2009). "The Worst is Yet To
Come". Futurist: 49.
21. Denning, Dorothy (Autumn 2000). "Cyberterrorism: The
Logic Bomb versus the Truck Bomb". Global Dialogue 2 (4).
Retrieved 20 August 2014.
22. Maryann Cusimano Love, Public Private Partnerships and
Global Problems:Y2K aand Cybecrime. Paper Presented at
the International Studies Association, Hong Kong, July 2001.
23. Calvin Sims, "Japan Software Suppliers Linked to Sect," The
New York Times (March 2, 2000): A6.

- 155 -
References
24. http://www.thedailystar.net/beta2/news/new-york-timestwitter-hacked-by-syrian-group/
25. "Malicious Control System Cyber Security Attack Case
Study–Maroochy
Water
csrc.nist.gov.

- 151 -
Services,
Australia" (PDf).

‫توزيع محتوى المقرر على األسابيع الدراسية‬
‫توزيع محتوى املقرر ىلع األسابيع الدراسية‬
‫المحتـــــــــــــوى‬
‫األسبـــــــوع‬
‫شرح توصيف المقرر وتوزيع المحتوى على المحاضرات‬
‫األول‬
‫‪Unit 1 – Educational Technology‬‬
‫الثاني‬
‫‪Unit 2 - Educational Communication‬‬
‫الثالث‬
‫‪Unit 3 - Educational System‬‬
‫الرابع‬
‫‪Unit 4 - Educational Aids‬‬
‫‪Unit 5 - Computer System‬‬
‫الخامس‬
‫السادس‬
‫‪Unit 6 - Internet‬‬
‫السابع‬
‫‪Unit 7 - Education‬‬
‫الثامن‬
‫‪Unit 8 - Research Writing Directives‬‬
‫التاسع‬
‫‪Unit 8 - Research Writing Directives‬‬
‫العاشر‬
‫‪Unit 9 - Translation Directives‬‬
‫الحادي عشر‬
‫‪Unit 9 - Translation Directives‬‬
‫الثاني عشر‬
‫مراجعة عامة لموضوعات المقرر‬
‫الثالث عشر‬
‫امتحان أعمال السنة‬
‫الرابع عشر‬
‫‪- 751 -‬‬
‫توزيع محتوى المقرر على األسابيع الدراسية‬
‫‪- 751 -‬‬
- 951 -
The End
- 961 -

    ${departmentInfo}
    --- المحادثة السابقة ---
    ${conversationHistory.map(msg => `${msg.role === 'user' ? 'المستخدم' : 'المساعد'}: ${msg.text}`).join('\n') || "لا يوجد سجل محادثة بعد."}
    --- سؤال المستخدم ---
    `; 