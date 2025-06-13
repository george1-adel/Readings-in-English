// تعريف الأسئلة كمتغير عام
window.questions = [
    // ===== Unit 1: Educational Technology =====
    // True/False Questions
    {
        chapter: 1,
        question: "The ancient Egyptians utilized technology like statues and papyrus in their educational processes.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "يمتد جذر تكنولوجيا التعليم إلى الماضي السحيق، حيث استخدم المصريون القدماء تكنولوجيا عصرهم (تماثيل، صور، الكتابة على ورق البردي) في التعليم."
    },
    {
        chapter: 1,
        question: "Modern educational systems are generally unsupported by educational technology.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "في الوقت الحاضر، يتم دعم أي نظام تعليمي حاليًا بواسطة تكنولوجيا التعليم لدعمه."
    },
    {
        chapter: 1,
        question: "The primary goal of educational technology is merely to produce educational resources, without focusing on problem-solving.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "تهدف تكنولوجيا التعليم إلى استخدام النظريات والأدوات لإنتاج الموارد التعليمية من أجل تحسين العملية التعليمية وحل مشاكلها."
    },
    {
        chapter: 1,
        question: "The 'Stage of Senses' in educational technology evolution focused primarily on auditory learning methods.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "المرحلة الأولى، 'مرحلة الحواس'، ركزت في البداية على التعليم البصري، ثم تطورت لاحقًا لتشمل التعليم السمعي البصري والمتعدد الحواس."
    },
    {
        chapter: 1,
        question: "Early visual teaching aids by ancient Egyptians included stones used for counting and arithmetic.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "المصريون القدماء كانوا أول من استخدموا الوسائل التعليمية البصرية مثل الأحجار في تعليم العد والحساب."
    },
    {
        chapter: 1,
        question: "Audiovisual education emerged to address the limitations of visual education by including senses beyond sight, such as hearing.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "التعليم السمعي البصري ظهر ليتغلب على قيود التعليم البصري الذي لم يراعِ احتياجات جميع المتعلمين (مثل المكفوفين)، فظهرت طرق الاتصال السمعية والبصرية لدمج حواس إضافية."
    },
    {
        chapter: 1,
        question: "In the 'Teaching Aids' stage, all teachers uniformly recognized the importance of educational aids and consistently used them.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "في هذه المرحلة، كانت آراء المعلمين متباينة حول الوسائل التعليمية؛ فبعضهم اعتبرها مهمة واستخدمها، بينما رأى آخرون أنها غير مهمة ولم يستخدموها."
    },
    {
        chapter: 1,
        question: "The 'Communication Channel' stage of educational technology evolution highlights its role in facilitating interaction between sender and receiver.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "في هذه المرحلة، تحول دور تكنولوجيا التعليم لتصبح قناة اتصال بين المرسل (المعلم) والمستقبل (المتعلم)."
    },
    {
        chapter: 1,
        question: "Educational technology becoming 'Part of the educational system' primarily focuses on improving educational inputs rather than outputs.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "في هذه المرحلة، أصبحت تكنولوجيا التعليم جزءًا من مدخلات النظام التعليمي وتشارك في العمليات التعليمية بهدف تحسين المخرجات التعليمية."
    },
    {
        chapter: 1,
        question: "The 'Theory' component of educational technology combinations refers exclusively to technological theories.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "يشمل 'النظرية' في مكونات تكنولوجيا التعليم النظريات التربوية والنفسية والفنية والمعلوماتية والحاسوبية، وليس فقط التقنية."
    },
    {
        chapter: 1,
        question: "'Development' in educational technology combinations involves the scientific research to apply technical tools in educational situations.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "'التطوير' هو البحث العلمي لأي أداة تقنية (مثل الكمبيوتر، الهاتف المحمول، الشبكات الاجتماعية) لتوظيفها في المواقف التعليمية المختلفة."
    },
    {
        chapter: 1,
        question: "The 'Use' component focuses on the theoretical understanding of technology rather than its practical application in education.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "'الاستخدام' هو الاستخدام الفعلي للتكنولوجيا في العملية التعليمية، مثل إدخال وزارة التربية والتعليم للتابلت في المدارس الثانوية."
    },
    {
        chapter: 1,
        question: "Managing educational resources and technological tools falls under the 'Management' component of educational technology.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "'الإدارة' هي عملية إدارة الموارد التعليمية والأدوات التكنولوجية، سواء على مستوى مشروع متكامل أو تدريس أو إدارة المعلومات."
    },
    {
        chapter: 1,
        question: "Educational technology contributes to solving traditional educational problems by neglecting individual differences among learners.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "تكنولوجيا التعليم تطور طرق التدريس لحل مشكلة إهمال الفروق الفردية بين المتعلمين، من خلال برامج تعليمية يمكنها الشرح عددًا لا نهائيًا من المرات."
    },
    {
        chapter: 1,
        question: "Modern technologies, such as social networks, can foster talent development by facilitating communication and idea exchange.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "التقنيات الحديثة، مثل الشبكات الاجتماعية، تحفز اكتشاف المواهب الجديدة وتوفر القدرة على التواصل وتبادل المعلومات وإبراز الأفكار والقدرات بين المتعلمين."
    },

    // Multiple Choice Questions
    {
        chapter: 1,
        question: "The root of educational technology extends to:",
        answers: [
            "The 20th century",
            "The era of industrial revolution",
            "The distant past, with ancient civilizations",
            "The invention of the internet"
        ],
        correctAnswer: 2,
        explanation: "يمتد جذر تكنولوجيا التعليم إلى الماضي السحيق، منذ أن بدأ الإنسان في تعليم الأطفال باستخدام التقنيات المتاحة."
    },
    {
        chapter: 1,
        question: "Which of the following best defines educational technology?",
        answers: [
            "Solely the use of computers in classrooms.",
            "Applying theories and tools to produce educational resources to improve and solve problems in the educational process.",
            "Any new gadget introduced into schools.",
            "The historical study of teaching methods."
        ],
        correctAnswer: 1,
        explanation: "تعريف تكنولوجيا التعليم هو استخدام النظريات والأدوات لإنتاج الموارد التعليمية بهدف تحسين العملية التعليمية وحل مشاكلها."
    },
    {
        chapter: 1,
        question: "The stage where educational technology became recognized as a 'Communication Channel' occurred after the emergence and spread of:",
        answers: [
            "Computer programming",
            "Systems science",
            "Media and communication science",
            "Visual education"
        ],
        correctAnswer: 2,
        explanation: "هذه المرحلة بدأت بعد ظهور وانتشار وسائل الإعلام وعلوم الاتصال."
    },
    {
        chapter: 1,
        question: "Museums and educational exhibitions are examples of what type of education from the 'Stage of Senses'?",
        answers: [
            "Visual education",
            "Audiovisual education",
            "Multisensory education",
            "Auditory education"
        ],
        correctAnswer: 2,
        explanation: "يشمل 'التعليم متعدد الحواس' حواسًا أخرى غير السمع والبصر مثل حاسة اللمس، ومن أمثلتها المتاحف والمعارض التعليمية."
    },
    {
        chapter: 1,
        question: "Which of the following is NOT a component of educational technology combinations?",
        answers: [
            "Theory",
            "Design",
            "Implementation",
            "Evaluation"
        ],
        correctAnswer: 2,
        explanation: "مكونات علم تكنولوجيا التعليم هي: النظرية، التصميم، التطوير، الاستخدام، الإدارة، والتقييم. 'Implementation' (التطبيق) ليس مذكوراً كعنصر مستقل في هذه القائمة، بل قد يكون جزءاً من 'الاستخدام'."
    },
    {
        chapter: 1,
        question: "The 'Design' component in educational technology primarily involves:",
        answers: [
            "Producing multimedia materials.",
            "Managing educational resources.",
            "Defining organized procedures to improve teaching, considering goals and learner characteristics.",
            "Identifying educational problems and developing technological solutions."
        ],
        correctAnswer: 2,
        explanation: "'التصميم' هو تحديد إجراءات منظمة لتحسين عملية التدريس، مع الأخذ في الاعتبار عوامل مثل تحديد الأهداف التعليمية وخصائص المتعلمين."
    },
    {
        chapter: 1,
        question: "Introducing tablets to secondary schools by the Egyptian Ministry of Education is an example of which educational technology combination?",
        answers: [
            "Development",
            "Management",
            "Use",
            "Evaluation"
        ],
        correctAnswer: 2,
        explanation: "هذا يمثل 'الاستخدام' الفعلي للتكنولوجيا في العملية التعليمية."
    },
    {
        chapter: 1,
        question: "Which component focuses on identifying educational problems and developing technological solutions for them?",
        answers: [
            "Theory",
            "Design",
            "Evaluation",
            "Development"
        ],
        correctAnswer: 2,
        explanation: "'التقييم' هو عملية تحديد المشكلات التعليمية وتطوير حلول تكنولوجية لها، كما يتضمن تطوير عمليات التقييم باستخدام الأدوات التكنولوجية."
    },
    {
        chapter: 1,
        question: "One of the importances of educational technology is:",
        answers: [
            "Increasing monotony and boredom in learning.",
            "Neglecting individual differences among learners.",
            "Providing an essential source of information.",
            "Exclusively benefiting traditional teaching methods."
        ],
        correctAnswer: 2,
        explanation: "من أهمية تكنولوجيا التعليم أنها توفر مصدرًا أساسيًا للمعلومات يحتاجه المعلم والطالب."
    },
    {
        chapter: 1,
        question: "Educational software that can make electronic teaching explain an infinite number of times helps to solve which problem of traditional methods?",
        answers: [
            "Lack of talent development.",
            "Limited access to information.",
            "Neglecting individual differences.",
            "Difficulty in managing resources."
        ],
        correctAnswer: 2,
        explanation: "تكنولوجيا التعليم تطور طرق التدريس لحل مشكلة إهمال الفروق الفردية بين المتعلمين من خلال برامج تعليمية لديها القدرة على الشرح عددًا لا نهائيًا من المرات."
    },
    {
        chapter: 1,
        question: "Social networks are highlighted as a tool for:",
        answers: [
            "Restricting communication between learners.",
            "Developing new talents.",
            "Promoting traditional teaching methods.",
            "Reducing access to information."
        ],
        correctAnswer: 1,
        explanation: "التقنيات الحديثة مثل الشبكات الاجتماعية تحفز اكتشاف المواهب الجديدة وتوفر القدرة على التواصل وتبادل المعلومات."
    },
    {
        chapter: 1,
        question: "Electronic simulation programs, such as flight simulation and chemistry experiments, contribute to:",
        answers: [
            "Group learning",
            "Mass communication",
            "Individual learning",
            "Traditional teaching"
        ],
        correctAnswer: 2,
        explanation: "توفر التكنولوجيا برامج تساهم في التعلم الفردي، مثل برامج المحاكاة الإلكترونية المستخدمة لمحاكاة المهارات المعملية."
    },
    {
        chapter: 1,
        question: "Which of the following is an example of 'multisensory education' mentioned in the text?",
        answers: [
            "Radio broadcasts",
            "Textbooks",
            "Slide with Sound Projector",
            "Natural History Museum"
        ],
        correctAnswer: 3,
        explanation: "المتاحف والمعارض التعليمية هي أمثلة على التعليم متعدد الحواس."
    },
    {
        chapter: 1,
        question: "The 'Management' combination of educational technology focuses on:",
        answers: [
            "Scientific research for new tools.",
            "Actual use of technology in classrooms.",
            "Directing educational resources and technological tools.",
            "Identifying educational problems."
        ],
        correctAnswer: 2,
        explanation: "'الإدارة' هي عملية إدارة الموارد التعليمية والأدوات التكنولوجية."
    },
    {
        chapter: 1,
        question: "Which stage of educational technology evolution saw its role convert to a communication channel between sender and receiver?",
        answers: [
            "Stage of Senses",
            "Teaching Aids",
            "Communication Channel",
            "Part of Educational System"
        ],
        correctAnswer: 2,
        explanation: "في هذه المرحلة، تحول دور تكنولوجيا التعليم لتصبح قناة اتصال بين المرسل والمعلم والمستقبل."
    },

    // ===== Unit 2: Educational Communication =====
    // True/False Questions
    {
        chapter: 2,
        question: "Communication is a recent human activity, emerging with social media networks.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "الاتصال هو أحد أقدم جوانب النشاط البشري، وقد ذُكر منذ عصر الفلاسفة اليونانيين مثل أرسطو وسقراط."
    },
    {
        chapter: 2,
        question: "Educational technology serves as a communication channel, engaging all the learner's senses to benefit the communication process.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "تلعب تكنولوجيا التعليم دور قناة الاتصال بين المرسل والمستقبل، من خلال إشراك جميع حواس المتعلم في عملية الاتصال، مما يعود بالنفع على العملية برمتها."
    },
    {
        chapter: 2,
        question: "In educational communication, the teacher is always the sole sender of the message.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "المرسل في عملية الاتصال التعليمي هو المعلم، ولكن قد يكون المرسل أيضًا برنامجًا حاسوبيًا أو تطبيقًا للهاتف المحمول يشرح المحتوى التعليمي."
    },
    {
        chapter: 2,
        question: "The effectiveness of the educational communication process decreases with increased learner interaction.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "كلما زاد تفاعل المتعلم، زادت فعالية عملية الاتصال."
    },
    {
        chapter: 2,
        question: "A message in educational communication typically lacks specific and clear educational goals.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "الرسالة في عملية الاتصال التعليمي لها أهداف تعليمية محددة وواضحة."
    },
    {
        chapter: 2,
        question: "Educational technology only reinforces existing communication channels and does not diversify them.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "تكنولوجيا التعليم تقوي وتنظم وتنوع قنوات الاتصال في عملية الاتصال التعليمي."
    },
    {
        chapter: 2,
        question: "Feedback is not essential in communication as the sender can always assume the message's effect on the receiver.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "بدون التغذية الراجعة (رد فعل المستقبل تجاه الرسالة)، لا يمكن للمرسل (المعلم) معرفة تأثير الرسالة على المستقبل (المتعلم)."
    },
    {
        chapter: 2,
        question: "A noisy communication environment, such as external loud voices, can create confusion in the communication process.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "أي تأثير سيء على بيئة الاتصال يؤدي إلى ارتباك في عملية الاتصال، مثل الأصوات الخارجية الصاخبة."
    },
    {
        chapter: 2,
        question: "A good communication process is characterized by being unidirectional, where information flows only from the sender.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "الاتصال الجيد يجب أن يكون ديناميكيًا ودائريًا، مما يعني وجود تفاعل بين المرسل والمستقبل."
    },
    {
        chapter: 2,
        question: "Defining behavioral goals is a crucial step during the planning of a purposeful communication process.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "يجب تحديد الأهداف السلوكية أثناء التخطيط لعملية الاتصال الهادفة."
    },
    {
        chapter: 2,
        question: "For a communication process to be considered 'organized,' it must involve an alternation between sending and receiving roles.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "يجب أن تكون عملية منظمة، حيث يرسل المرسل ويستقبل المستقبل، فلا يناسب أن يكون الوقت كله مرسلين فقط أو مستقبلين فقط."
    },
    {
        chapter: 2,
        question: "Good educational communication implies a clear, two-way feedback system between sender and receiver.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "الاتصال التعليمي الجيد يتميز بوجود اتصال دائري بين المرسل والمستقبل، ووجود تغذية راجعة مزدوجة."
    },
    {
        chapter: 2,
        question: "Verbal language in educational communication solely involves spoken words.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "اللغة اللفظية تشمل رموزًا لفظية (الاستماع والتحدث) ورموزًا مكتوبة (القراءة والكتابة)."
    },
    {
        chapter: 2,
        question: "Non-verbal communication, such as body language, acts as a confirmatory tool for verbal language.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "اللغة غير اللفظية، مثل لغة الجسد (تعبيرات الوجه وحركات اليد)، تستخدم كأدوات تأكيدية لللغة اللفظية."
    },
    {
        chapter: 2,
        question: "One of the barriers to educational communication is the teacher's use of traditional methods that bore the learner.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "من المشاكل التي تسبب حواجز لعملية الاتصال التعليمي هي استخدام المعلم للطرق التقليدية التي تسبب الملل للمتعلم."
    },

    // Multiple Choice Questions
    {
        chapter: 2,
        question: "The organized process of sending and receiving messages between a teacher and students through channels is defined as:",
        answers: [
            "General communication",
            "Social interaction",
            "Educational communication",
            "Information exchange"
        ],
        correctAnswer: 2,
        explanation: "هذا هو تعريف الاتصال التعليمي."
    },
    {
        chapter: 2,
        question: "Which element of educational communication refers to the tool that carries the message from the sender to the receiver?",
        answers: [
            "Feedback",
            "Message",
            "Channel",
            "Environment"
        ],
        correctAnswer: 2,
        explanation: "'القناة' هي الأداة التي تحمل الرسالة من المرسل إلى المستقبل."
    },
    {
        chapter: 2,
        question: "When the receiver reacts toward the message, indicating its effectiveness, this element is known as:",
        answers: [
            "Message",
            "Channel",
            "Environment",
            "Feedback"
        ],
        correctAnswer: 3,
        explanation: "'التغذية الراجعة' هي رد فعل المستقبل تجاه الرسالة، وبالتالي تبين مدى فعالية الرسالة."
    },
    {
        chapter: 2,
        question: "All of the following are features of a good communication process EXCEPT:",
        answers: [
            "Dynamic",
            "Purposeful",
            "Unstructured",
            "Circular"
        ],
        correctAnswer: 2,
        explanation: "الاتصال الجيد يجب أن يكون منظمًا، وليس غير منظم."
    },
    {
        chapter: 2,
        question: "A communication process where the learner is not active is considered:",
        answers: [
            "Purposeful",
            "Dynamic",
            "Organized",
            "Failed"
        ],
        correctAnswer: 3,
        explanation: "الاتصال الفاشل هو الذي لا يكون فيه المتعلم نشيطًا، لأن الاتصال الجيد يجب أن يكون ديناميكيًا (تفاعليًا)."
    },
    {
        chapter: 2,
        question: "Which of the following is an example of an 'educational communication channel'?",
        answers: [
            "Learner fatigue",
            "External loud voices",
            "Mobile phone",
            "Teacher's academic skills"
        ],
        correctAnswer: 2,
        explanation: "من قنوات الاتصال التعليمي الأخرى المذكورة هي (الكمبيوتر، الهاتف المحمول)."
    },
    {
        chapter: 2,
        question: "What kind of language in educational communication includes listening and speaking?",
        answers: [
            "Non-verbal language",
            "Body language",
            "Verbal language",
            "Extra elements"
        ],
        correctAnswer: 2,
        explanation: "اللغة اللفظية تشمل الرموز اللفظية التي تتضمن (الاستماع والتحدث)."
    },
    {
        chapter: 2,
        question: "Which of the following is NOT an importance of educational communication?",
        answers: [
            "Deepening learners' experiences.",
            "Reducing the interaction between teacher and learner.",
            "Improving the quality of education.",
            "Developing the ability to think and be creative."
        ],
        correctAnswer: 1,
        explanation: "تزيد الاتصالات التعليمية من التفاعل بين المعلم والمتعلم، مما يحسن العملية التعليمية."
    },
    {
        chapter: 2,
        question: "What is an example of a physical tool in non-verbal communication?",
        answers: [
            "Oral explanation",
            "Written symbols",
            "Facial expressions",
            "Audiobooks"
        ],
        correctAnswer: 2,
        explanation: "من مكونات اللغة غير اللفظية هي لغة الجسد (تعبيرات الوجه وحركات اليد)."
    },
    {
        chapter: 2,
        question: "Bad classroom conditions, such as poor ventilation or damaged microphone, are considered:",
        answers: [
            "Features of good communication",
            "Elements of feedback",
            "Educational communication barriers",
            "Types of communication channels"
        ],
        correctAnswer: 2,
        explanation: "ظروف الفصل السيئة (سوء التهوية، الميكروفون التالف، الازدحام) هي من المعوقات التي تسبب حواجز لعملية الاتصال التعليمي."
    },
    {
        chapter: 2,
        question: "Fusion in the classroom, whether internal (due to illness, anxiety) or external (communication environment), can lead to:",
        answers: [
            "Enhanced communication",
            "Improved learner interaction",
            "Barriers to communication",
            "Better feedback mechanisms"
        ],
        correctAnswer: 2,
        explanation: "وجود الاندماج (Fusion) في الفصل، سواء داخليًا أو خارجيًا، يؤدي إلى حواجز في عملية الاتصال."
    },
    {
        chapter: 2,
        question: "The definition of educational communication includes the purpose of making a certain impact in the future through:",
        answers: [
            "Only non-verbal symbols.",
            "Verbal and non-verbal symbols formulated into a message.",
            "The sender's actions alone.",
            "The receiver's interpretation only."
        ],
        correctAnswer: 1,
        explanation: "الرسالة (Syllabus) هي رموز لفظية وغير لفظية تصاغ لإحداث تأثير معين في المستقبل، وهي جزء من تعريف الاتصال التعليمي."
    },
    {
        chapter: 2,
        question: "When the teacher neglects individual differences among learners, it can lead to:",
        answers: [
            "Stronger communication skills.",
            "Failure in the communication process for some learners.",
            "More organized teaching.",
            "Increased learner engagement."
        ],
        correctAnswer: 1,
        explanation: "عدم مراعاة الفروق الفردية بين المتعلمين قد يؤدي إلى عدم مواكبة بعضهم لعملية الاتصال وبالتالي فشلهم."
    },
    {
        chapter: 2,
        question: "The 'Receiver' in educational communication is described as the person or entity for whom the message is addressed and made. Who is typically the receiver in this context?",
        answers: [
            "The teacher",
            "The learner",
            "The message itself",
            "The communication channel"
        ],
        correctAnswer: 1,
        explanation: "'المستقبل' هو الشخص أو الأشخاص الذين توجه الرسالة إليهم، والمتعلم هو المستقبل في الاتصال التعليمي."
    },
    {
        chapter: 2,
        question: "According to the source, the relationship between educational technology and communication is that educational technology:",
        answers: [
            "Replaces the need for traditional communication channels.",
            "Acts as a communication barrier.",
            "Plays the role of a communication channel.",
            "Is irrelevant to the communication process."
        ],
        correctAnswer: 2,
        explanation: "تلعب تكنولوجيا التعليم دور قناة الاتصال بين المرسل والمستقبل."
    }
];
