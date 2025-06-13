// الفصل الخامس والسادس: نظام الكمبيوتر والإنترنت

window.chapter3Questions = [
    // ===== Unit 3: Computer System =====
    // --- True/False (13 Questions) ---
    {
        question: "Computer hardware refers exclusively to external devices connected to the computer.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "الأجهزة المادية (Hardware) للكمبيوتر تشمل المكونات الداخلية والخارجية مثل الشاشة، لوحة المفاتيح، وحدات المعالجة، ووحدات التخزين، وليست مقتصرة على الأجهزة الخارجية فقط."
    },
    {
        question: "RAM (Random Access Memory) is primarily used for long-term storage of user applications and data.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "ذاكرة الوصول العشوائي (RAM) تخزن الكود والبيانات التي يتم الوصول إليها بشكل نشط بواسطة وحدة المعالجة المركزية (CPU)، ويتم مسح البيانات تلقائيًا منها عندما لا تكون نشطة، مما يجعلها للتخزين قصير المدى وليس طويل الأمد."
    },
    {
        question: "An operating system like Windows provides common services for computer programs, managing hardware and software resources.",
        answers: ["True", "False"],
        correctAnswer: 0,
        chapter: 3,
        explanation: "نظام التشغيل (OS) هو برنامج نظام يدير الأجهزة والبرامج ويوفر خدمات مشتركة لبرامج الكمبيوتر، مثل ويندوز."
    },
    {
        question: "A computer mouse is classified as an output unit because it allows users to see movement on the screen.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "الفأرة (Mouse) هي جهاز إدخال (Input unit) يُستخدم لإدخال البيانات عبر تحديد الحركة ثنائية الأبعاد، وحركتها تُترجم إلى حركة المؤشر على الشاشة."
    },
    {
        question: "Applications are defined as instructions that can be stored and run by hardware.",
        answers: ["True", "False"],
        correctAnswer: 0,
        chapter: 3,
        explanation: "التطبيقات (Applications) هي تعليمات يمكن تخزينها وتشغيلها بواسطة الأجهزة، وهي جزء من البرامج (Software)."
    },
    {
        question: "Photoshop and Illustrator are examples of office applications used for administrative tasks.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "فوتوشوب وإليستريتور هي أمثلة على تطبيقات الرسوم (Graphic Applications) المستخدمة في الأعمال الفنية، بينما برامج مثل مايكروسوفت وورد وإكسل هي تطبيقات مكتبية."
    },
    {
        question: "The Central Processing Unit (CPU) is responsible for executing instructions that make up a computer program.",
        answers: ["True", "False"],
        correctAnswer: 0,
        chapter: 3,
        explanation: "وحدة المعالجة المركزية (CPU) هي الدائرة الإلكترونية داخل الكمبيوتر التي تقوم بتنفيذ التعليمات التي تشكل برنامج الكمبيوتر."
    },
    {
        question: "External storage devices, such as flash memory, clear data automatically once it is no longer actively accessed by the CPU.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "أجهزة التخزين الخارجية (External Storage Devices) مثل الذاكرة الفلاشية تستخدم لتخزين بيانات المستخدم بشكل دائم، على عكس ذاكرة الوصول العشوائي (RAM)."
    },
    {
        question: "Antivirus applications are specifically designed for educational purposes, like course-tutorial applications.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "برامج مكافحة الفيروسات (Antivirus Applications) مصممة لمسح الفيروسات وحذفها، بينما التطبيقات التعليمية (Educational Applications) مصممة خصيصًا للأغراض التعليمية."
    },
    {
        question: "Computer software is broadly categorized into operating systems and applications.",
        answers: ["True", "False"],
        correctAnswer: 0,
        chapter: 3,
        explanation: "البرامج (Software) هي تعليمات يمكن تخزينها وتشغيلها بواسطة الأجهزة، وتنقسم إلى نظام تشغيل (Operating system) وتطبيقات (Applications)."
    },
    {
        question: "A computer display (monitor) is an input unit that allows users to interact with the computer.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "شاشة الكمبيوتر (Display) هي جهاز إخراج (Output device) يعرض المعلومات بشكل مرئي، بينما أجهزة الإدخال مثل لوحة المفاتيح هي التي تسمح بالتفاعل."
    },
    {
        question: "Read Only Memory (ROM) stores the BIOS that runs when the computer is powered on.",
        answers: ["True", "False"],
        correctAnswer: 0,
        chapter: 3,
        explanation: "ذاكرة القراءة فقط (ROM) تخزن الـ BIOS الذي يتم تشغيله عند تشغيل الكمبيوتر في عملية تعرف بـ (Booting)."
    },
    {
        question: "Runtime applications are considered complementary programs for the operating system, often used for file compression.",
        answers: ["True", "False"],
        correctAnswer: 0,
        chapter: 3,
        explanation: "تطبيقات وقت التشغيل (Runtimes Applications) هي برامج تكميلية لنظام التشغيل، مثل WinRAR المستخدم لضغط الملفات."
    },
    {
        question: "A computer system functions even if it lacks either hardware or software components.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "نظام الكمبيوتر هو نظام متكامل يتكون من مكونات الأجهزة والبرامج التي تعمل معًا لأداء وظائفه، ولا يمكن أن يعمل بدون أحدهما."
    },
    {
        question: "Maintenance applications are used to perform computer repair tasks, such as processing bad sectors.",
        answers: ["True", "False"],
        correctAnswer: 0,
        chapter: 3,
        explanation: "تطبيقات الصيانة (Maintenance Applications) هي برامج تُستخدم لأداء مهام إصلاح الكمبيوتر، مثل معالجة القطاعات التالفة (bad sectors)."
    },

    // --- Multiple Choice (13 Questions) ---
    {
        question: "Which of the following is considered an input unit of a computer system?",
        answers: [
            "Printer",
            "Monitor",
            "Keyboard",
            "Central Processing Unit (CPU)"
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "لوحة المفاتيح (Keyboard) هي جهاز إدخال يستخدم لإدخال البيانات عن طريق المفاتيح. الطابعة والشاشة هي أجهزة إخراج، ووحدة المعالجة المركزية هي وحدة معالجة."
    },
    {
        question: "What is the primary function of an operating system?",
        answers: [
            "Storing user applications permanently",
            "Managing computer hardware and software resources",
            "Editing images and videos",
            "Compressing files"
        ],
        correctAnswer: 1,
        chapter: 3,
        explanation: "الوظيفة الأساسية لنظام التشغيل هي إدارة موارد الأجهزة والبرامج وتوفير خدمات مشتركة لبرامج الكمبيوتر."
    },
    {
        question: "Which type of software is Microsoft PowerPoint classified as?",
        answers: [
            "Graphic Application",
            "Runtime Application",
            "Office Application",
            "Antivirus Application"
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "مايكروسوفت باوربوينت (MS PowerPoint) هو جزء من حزمة مايكروسوفت أوفيس (Microsoft Office)، وهي برامج تُستخدم في معظم الأعمال الإدارية."
    },
    {
        question: "The physical parts or components of a computer, such as the monitor and keyboard, are collectively known as:",
        answers: [
            "Computer Software",
            "Computer Applications",
            "Computer Hardware",
            "Operating Systems"
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "الأجزاء المادية أو مكونات الكمبيوتر، مثل الشاشة ولوحة المفاتيح، تُعرف باسم أجهزة الكمبيوتر (Computer hardware)."
    },
    {
        question: "Which of the following describes the function of RAM?",
        answers: [
            "Stores the BIOS for booting the computer.",
            "Stores data long-term for user applications.",
            "Stores code and data actively accessed by the CPU, clearing automatically when inactive.",
            "Makes graphics and text on paper."
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "ذاكرة الوصول العشوائي (RAM) تخزن الكود والبيانات التي يتم الوصول إليها بشكل نشط بواسطة وحدة المعالجة المركزية، ويتم مسحها تلقائيًا عند عدم النشاط."
    },
    {
        question: "Which of these is an example of an output unit?",
        answers: [
            "Mouse",
            "Scanner",
            "Printer",
            "Microphone"
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "الطابعة (Printer) هي جهاز إخراج يصنع الرسوم والنصوص على الورق."
    },
    {
        question: "What is the definition of a computer system according to the source?",
        answers: [
            "Only the hardware components that perform functions.",
            "Only the software instructions that can be stored and run.",
            "The hardware and software components that come together to perform its functions.",
            "A device solely for playing games and watching videos."
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "نظام الكمبيوتر هو مكونات الأجهزة والبرامج التي تعمل معًا لأداء وظائفها."
    },
    {
        question: "Which example correctly identifies an educational application?",
        answers: [
            "WinRAR",
            "Photoshop",
            "Electronic dictionaries",
            "MS Excel"
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "القواميس الإلكترونية (electronic dictionaries) هي برامج مصممة خصيصًا للأغراض التعليمية."
    },
    {
        question: "The process known as 'Booting' in a computer system involves:",
        answers: [
            "Storing temporary data in RAM.",
            "Executing instructions by the CPU.",
            "Storing the BIOS in ROM when the computer is powered on.",
            "Compressing files using a runtime application."
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "الـ BIOS المخزن في الذاكرة القراءة فقط (ROM) هو الذي يتم تشغيله عند تشغيل الكمبيوتر، وهي عملية تعرف بالـ (Booting)."
    },
    {
        question: "Adobe Premiere is an example of which type of application?",
        answers: [
            "Office Application",
            "Antivirus Application",
            "Graphic Application",
            "Educational Application"
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "أدوبي بريمير (Premiere) هو برنامج يُستخدم لتحرير الفيديو، ويندرج تحت تطبيقات الرسوم (Graphic Applications)."
    },
    {
        question: "Which statement about operating systems is FALSE?",
        answers: [
            "They manage hardware resources.",
            "They manage software resources.",
            "They provide a stable way for applications to deal with hardware.",
            "They are a type of application software."
        ],
        correctAnswer: 3,
        chapter: 3,
        explanation: "نظام التشغيل (Operating system) هو برنامج نظام (System software) وليس تطبيق (Application software)."
    },
    {
        question: "What is the purpose of external storage devices?",
        answers: [
            "To store actively accessed code and data temporarily.",
            "To execute computer program instructions.",
            "To permanently store user application data.",
            "To display visual information."
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "أجهزة التخزين الخارجية (External Storage Devices) تُستخدم لتخزين بيانات تطبيقات المستخدم بشكل دائم."
    },
    {
        question: "Which of the following is NOT a component of computer hardware?",
        answers: [
            "Input units",
            "Operating systems",
            "Processing units",
            "Storage units"
        ],
        correctAnswer: 1,
        chapter: 3,
        explanation: "أنظمة التشغيل (Operating systems) هي جزء من البرامج (Software)، وليست من الأجهزة المادية (Hardware)."
    },
    {
        question: "Applications like WinRAR are classified under:",
        answers: [
            "Office Applications",
            "Graphic Applications",
            "Runtimes Applications",
            "Educational Applications"
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "WinRAR هو برنامج تكميلي لنظام التشغيل، ويُصنف ضمن تطبيقات وقت التشغيل (Runtimes Applications)."
    },
    {
        question: "What does a computer printer primarily do?",
        answers: [
            "Detects two-dimensional motion.",
            "Displays information in visual form.",
            "Executes instructions of a program.",
            "Makes graphics and text on paper."
        ],
        correctAnswer: 3,
        chapter: 3,
        explanation: "الطابعة (Printer) هي جهاز طرفي يصنع الرسوم والنصوص على الورق."
    },

    // ===== Unit 3: Internet =====
    // --- True/False (13 Questions) ---
    {
        question: "The Internet is a small, localized computer network connecting computers within a single city.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "الإنترنت شبكة كمبيوتر عالمية واسعة جدًا، تربط الشبكات وأجهزة الكمبيوتر حول العالم."
    },
    {
        question: "One reason for the widespread use of the Internet is its ability to publish content in any language.",
        answers: ["True", "False"],
        correctAnswer: 0,
        chapter: 3,
        explanation: "يسمح الإنترنت بنشر المحتوى بأي لغة، مما ساهم في انتشاره الواسع."
    },
    {
        question: "E-mail is primarily a social networking service for exchanging social news between community members.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "البريد الإلكتروني (E-Mail) هو برنامج لإرسال واستقبال الرسائل الإلكترونية بسرعة فائقة، بينما الشبكات الاجتماعية (Social networks) هي مواقع لتبادل الأخبار الاجتماعية."
    },
    {
        question: "Web sites can be used in education by creating a website that explains educational material.",
        answers: ["True", "False"],
        correctAnswer: 0,
        chapter: 3,
        explanation: "يمكن استخدام المواقع الإلكترونية (Web Sites) في التعليم عن طريق إنشاء موقع يشرح المواد التعليمية."
    },
    {
        question: "Portals are general websites that provide a wide range of services for any user.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "البوابات (Portals) هي مواقع ويب مملوكة لمؤسسة تعليمية محددة (مدرسة، أكاديمية، جامعة)، وتستخدم للوصول إلى الخدمات التعليمية لتلك المؤسسة فقط."
    },
    {
        question: "The use of the Internet always requires a specific type of computer or operating system.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "استخدام الإنترنت لا يتطلب نوعًا معينًا من الكمبيوتر أو نظام تشغيل محدد، مما ساهم في انتشاره."
    },
    {
        question: "Social networks are described as websites of the first generation (Web1).",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "الشبكات الاجتماعية (Social networks) هي مواقع ويب من الجيل الثاني (Web2)."
    },
    {
        question: "Search Engines help users access other internet sites by writing a search word instead of the full site name.",
        answers: ["True", "False"],
        correctAnswer: 0,
        chapter: 3,
        explanation: "محركات البحث (Search Engines) تساعد المستخدمين على الوصول إلى مواقع الإنترنت الأخرى عن طريق كتابة كلمة بحث بدلاً من الاسم الكامل للموقع."
    },
    {
        question: "Video Websites are primarily used for searching academic research papers and books in PDF format.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "مواقع الفيديو (Video Websites) مخصصة لمقاطع الفيديو، بينما مواقع قواعد البيانات (Databases) هي التي تحتوي على الموارد التعليمية والبحثية بصيغة PDF."
    },
    {
        question: "Web Translation services provide immediate electronic translation from one language to another.",
        answers: ["True", "False"],
        correctAnswer: 0,
        chapter: 3,
        explanation: "مواقع الترجمة عبر الويب (Web Translation) توفر ترجمة إلكترونية فورية من لغة إلى أخرى."
    },
    {
        question: "E-mail can serve as an official means of communication between different educational institutions.",
        answers: ["True", "False"],
        correctAnswer: 0,
        chapter: 3,
        explanation: "يُستخدم البريد الإلكتروني (E-Mail) كوسيط اتصال رسمي بين المؤسسات التعليمية المختلفة."
    },
    {
        question: "One of the reasons for the Internet's widespread use is that it is entirely free to use all services universally.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "يُذكر أن الإنترنت مجاني للاستخدام بشكل عام، مما يسمح بالوصول إلى جمهور أوسع، ولكن بعض خدمات قواعد البيانات قد تكون مدفوعة الأجر. السؤال ينص على 'كل الخدمات' وهذا غير صحيح تمامًا."
    },
    {
        question: "Databases on the Internet primarily host video tutorials and animations.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "قواعد البيانات (Databases) على الإنترنت تحتوي على عدد هائل من الموارد التعليمية مثل الكتب والأبحاث الأكاديمية بصيغة PDF، وليست مخصصة لمقاطع الفيديو التعليمية."
    },
    {
        question: "Social networks can facilitate educational communication between students, teachers, and parents through e-groups.",
        answers: ["True", "False"],
        correctAnswer: 0,
        chapter: 3,
        explanation: "يمكن استخدام الشبكات الاجتماعية في التعليم من خلال إنشاء مجموعات إلكترونية (e-groups) للتواصل التعليمي بين الأطراف المختلفة في العملية التعليمية."
    },
    {
        question: "Google is an example of a web site that contains images and text and is dealt with through Internet browsers.",
        answers: ["True", "False"],
        correctAnswer: 1,
        chapter: 3,
        explanation: "جوجل (Google) هو مثال على محرك بحث (Search Engine)، بينما المواقع الإلكترونية (Web Sites) هي صفحات تحتوي على صور ونصوص يتم التعامل معها عبر متصفحات الإنترنت."
    },

    // --- Multiple Choice (13 Questions) ---
    {
        question: "Which of the following is NOT a reason for the widespread use of the Internet?",
        answers: [
            "Speed of communication",
            "Requirement of specific hardware types",
            "Ability to publish content in any language",
            "Multiple uses in all fields"
        ],
        correctAnswer: 1,
        chapter: 3,
        explanation: "من أسباب الانتشار الواسع للإنترنت أنه لا يتطلب نوعًا محددًا من الكمبيوتر أو نظام تشغيل معين، فالمتطلب هنا يعتبر سببًا خاطئًا."
    },
    {
        question: "Yahoo Mail is an example of a service provided by:",
        answers: [
            "Search Engines",
            "E-Mail providers",
            "Social networks",
            "Video Websites"
        ],
        correctAnswer: 1,
        chapter: 3,
        explanation: "ياهو ميل (Yahoo Mail) هو أحد أشهر مزودي خدمة البريد الإلكتروني (E-Mail providers)."
    },
    {
        question: "What distinguishes a 'Portal' from a general website in the context of education?",
        answers: [
            "Portals are exclusively for entertainment.",
            "Portals belong to a specific educational institution.",
            "Portals do not require internet access.",
            "Portals are solely for video streaming."
        ],
        correctAnswer: 1,
        chapter: 3,
        explanation: "البوابات (Portals) هي مواقع ويب مملوكة لمؤسسة تعليمية محددة مثل جامعة المنيا، وتقدم خدماتها الخاصة بتلك المؤسسة."
    },
    {
        question: "Which Internet service allows users to search for a video file to view and are often free and in most languages?",
        answers: [
            "Search Engines",
            "Databases",
            "Video Websites",
            "Web Translation"
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "مواقع الفيديو (Video Websites) هي شبكات اجتماعية مخصصة لمقاطع الفيديو، وتسمح بالبحث عن ملفات الفيديو وعرضها."
    },
    {
        question: "An educational institution wants to create an online platform for students to apply for courses and pay expenses. Which Internet service would be most suitable?",
        answers: [
            "Social network",
            "E-Mail",
            "Portal",
            "Search Engine"
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "البوابات (Portals) تُستخدم من قبل المستخدمين للوصول إلى جميع الخدمات التعليمية التي تقدمها المؤسسة، مثل التقديم على الدورات ودفع المصروفات."
    },
    {
        question: "Which of the following is an example of a search engine?",
        answers: [
            "Facebook",
            "YouTube",
            "Google",
            "Microsoft Outlook"
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "جوجل (Google) هو أحد الأمثلة المذكورة على محركات البحث (Search Engines)."
    },
    {
        question: "What is the primary content found in 'Databases' as an Internet service for education?",
        answers: [
            "Video clips and animations.",
            "Electronic messages and assignments.",
            "Books and academic researches in PDF format.",
            "Social news and community discussions."
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "مواقع قواعد البيانات (Databases) تحتوي على عدد هائل من الموارد التعليمية مثل الكتب والأبحاث الأكاديمية المخزنة بصيغة PDF."
    },
    {
        question: "How are social networks used in education, according to the source?",
        answers: [
            "Primarily for official communication between institutions.",
            "By creating course or classroom e-groups for educational communication.",
            "As the main source for immediate electronic translation.",
            "For searching academic research papers only."
        ],
        correctAnswer: 1,
        chapter: 3,
        explanation: "تُستخدم الشبكات الاجتماعية في التعليم من خلال إنشاء مجموعات إلكترونية (e-groups) للتواصل التعليمي."
    },
    {
        question: "Which statement about Web Translation services is true?",
        answers: [
            "They only translate text, not provide related meanings.",
            "They are primarily used for sending assignments.",
            "They provide immediate electronic translation and often related meanings of terms.",
            "They are a type of social network."
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "مواقع الترجمة عبر الويب (Web Translation) توفر ترجمة إلكترونية فورية من لغة إلى أخرى، وتقدم أيضًا عدة معانٍ ذات صلة للمصطلح الواحد."
    },
    {
        question: "The Internet is best described as:",
        answers: [
            "A local area network (LAN) for small businesses.",
            "A global computer network linking networks and computers worldwide.",
            "A closed system used only by academic researchers.",
            "A software application for web browsing."
        ],
        correctAnswer: 1,
        chapter: 3,
        explanation: "الإنترنت شبكة كمبيوتر عالمية واسعة جدًا، تربط الشبكات وأجهزة الكمبيوتر حول العالم."
    },
    {
        question: "Which of the following is a key benefit of E-Mail in an educational context?",
        answers: [
            "Providing live video lectures.",
            "Acting as a medium for sending assignments and an official communication means.",
            "Hosting large databases of academic papers.",
            "Allowing anonymous social interactions."
        ],
        correctAnswer: 1,
        chapter: 3,
        explanation: "يُستخدم البريد الإلكتروني (E-Mail) كوسيط بين المعلم والمتعلم لإرسال الواجبات والمهام الأكاديمية، وكوسيلة اتصال رسمية بين المؤسسات التعليمية."
    },
    {
        question: "Which of the following describes Web Sites in the context of internet services for education?",
        answers: [
            "They are websites belonging to a specific educational institution.",
            "They are primarily used for sending and receiving electronic messages.",
            "They are pages containing images and text, dealt with through Internet browsers.",
            "They are social networks specific to video clips."
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "المواقع الإلكترونية (Web Sites) هي صفحات تحتوي على صور ونصوص، يتم التعامل معها من خلال متصفحات الإنترنت."
    },
    {
        question: "If a student needs to find educational resources and books by searching keywords, which Internet service would be most helpful?",
        answers: [
            "E-Mail",
            "Social networks",
            "Search Engines",
            "Video Websites"
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "محركات البحث (Search Engines) تُستخدم في التعليم للوصول إلى المواقع التعليمية وتنزيل الكتب والموارد التعليمية."
    },
    {
        question: "What is a notable feature of Video Websites regarding their content?",
        answers: [
            "They are restricted to a single language.",
            "They require paid subscriptions for all content.",
            "They allow users to search for video files by using search words.",
            "They primarily offer text-based educational material."
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "مواقع الفيديو (Video Websites) تسمح للمستخدمين بالبحث عن ملف فيديو للعرض باستخدام كلمات البحث."
    },
    {
        question: "The statement 'The Internet is free to use, resulting in the ability to reach more audiences' suggests which characteristic?",
        answers: [
            "High security requirements.",
            "Limited accessibility.",
            "Wide reach and availability.",
            "Complex technical demands for users."
        ],
        correctAnswer: 2,
        chapter: 3,
        explanation: "كون الإنترنت مجانيًا للاستخدام يؤدي إلى القدرة على الوصول إلى جمهور أوسع، مما يعكس خاصية الانتشار والوصول الواسع."
    }
];

// إضافة الأسئلة إلى مصفوفة الأسئلة الرئيسية
window.questions = window.questions.concat(window.chapter3Questions);
