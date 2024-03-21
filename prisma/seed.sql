DELETE    FROM Post;

INSERT    INTO Post (description, category, beginDate)
VALUES    ("😛 ran 🥾 5 miles up a very big hill 🌎 and then took a break 🤓 and rested and then proceeded to go back down the hill", "health", 1710991487000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("took vitamins and yeah it was super cool and amazing", "health", 1, 1710152687000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("code all day, code all night", "code", 0, 1710152788000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("python and javascript ftw", "code", 1, 1710152888000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("ran for days and day", "health", 0, 1710152589000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("wrote next.js apps", "code", 1, 1710152481000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("january is soooo cold", "earth", 1, 1705663487000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("😛 😛 😛 happy birthday", "health", 1, 1722680687000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("mar 20 at 9:23 pm", "code", 1, 1710994849000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("beginning of march", "time", 1, 1709280001000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("end of march +0", "time", 1, 1711954799000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("end of march +1", "time", 0, 1711954800000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("end of march +2", "time", 0, 1711954801000);

INSERT    INTO Post (description, category, isImportant, beginDate)
VALUES    ("end of march +3", "time", 1, 1711954802000);

INSERT    INTO Post (description, category, beginDate, endDate)
VALUES    ("b - e (same day)", "time", 1709676000000, 1709679600000);

INSERT    INTO Post (description, category, beginDate, endDate)
VALUES    ("b - e (only march)", "time", 1709676000000, 1709852400000);

INSERT    INTO Post (description, category, beginDate, endDate)
VALUES    ("b - e (mar to may)", "time", 1709676000000, 1716328800000);

INSERT    INTO Post (description, category, beginDate, endDate)
VALUES    ("b - e (feb to mar)", "time", 1708556400000, 1711058400000);

INSERT    INTO Post (description, category, beginDate, endDate)
VALUES    ("b - e (feb to may)", "time", 1708556400000, 1716328800000);

SELECT    *
FROM      Post
ORDER BY  beginDate asc;
