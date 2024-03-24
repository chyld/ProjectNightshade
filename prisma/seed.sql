DELETE    FROM Post;

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - important", "health", "#a8a29e", 1, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate, endDate)
VALUES    ("may/apr 15 - important", "exercise", "#a8a29e", 1, 1710486000000, 1713164400000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15", "health", "#a8a29e", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15", "exercise", "#a8a29e", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15", "fasting", "#a8a29e", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15", "nature", "#a8a29e", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15", "code", "#a8a29e", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15", "math", "#a8a29e", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15", "job", "#a8a29e", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15", "danger", "#a8a29e", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#f87171", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#fb923c", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#fbbf24", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#facc15", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#a3e635", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#4ade80", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#34d399", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#2dd4bf", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#22d3ee", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#38bdf8", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#60a5fa", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#818cf8", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#a78bfa", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#c084fc", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#e879f9", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - color", "code", "#f472b6", 0, 1710486000000);

SELECT    *
FROM      Post
ORDER BY  beginDate asc;
