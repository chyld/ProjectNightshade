DELETE    FROM Post;

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("may 15", "health", 1, 1710486000000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("may 15", "exercise", 0, 1710486000000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("may 15", "fasting", 1, 1710486000000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("may 15", "nature", 0, 1710486000000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("may 15", "code", 1, 1710486000000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("may 15", "math", 0, 1710486000000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("may 15", "science", 1, 1710486000000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("may 15", "job", 0, 1710486000000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("may 15", "danger", 1, 1710486000000);

SELECT    *
FROM      Post
ORDER BY  beginDate asc;
