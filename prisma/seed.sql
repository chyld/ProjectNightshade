DELETE    FROM Post;

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - wow", "code", "green", 1, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - chill", "code", "orange", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - danger", "danger", "#ff33cc", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate)
VALUES    ("may 15 - nature", "nature", "lime", 0, 1710486000000);

INSERT    INTO Post (description, category, color, isImportant, beginDate, endDate)
VALUES    ("may/apr 15 - nature", "nature", "lime", 0, 1710486000000, 1713164400000);

INSERT    INTO Post (description, category, color, isImportant, beginDate, endDate)
VALUES    ("may/apr 15 - danger", "danger", "pink", 0, 1710486000000, 1713164400000);

INSERT    INTO Post (description, category, color, isImportant, beginDate, endDate)
VALUES    ("may/apr 15 - code", "code", "gray", 0, 1710486000000, 1713164400000);

SELECT    *
FROM      Post
ORDER BY  beginDate asc;
