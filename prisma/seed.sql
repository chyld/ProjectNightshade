DELETE    FROM Post;

INSERT    INTO Post (description, category, beginDate)
VALUES    ("😛 ran 5 miles", "health", "2024-03-15 11:15:00");

INSERT    INTO Post (description, category, beginDate)
VALUES    ("took vitamins", "health", "2024-03-15 11:15:00");

INSERT    INTO Post (description, category, beginDate)
VALUES    ("slept 8 hours", "health", "2024-03-15 11:15:00");

INSERT    INTO Post (description, category, beginDate)
VALUES    ("🥾 ran outside 2 miles", "health", "2024-03-16 11:15:00");

INSERT    INTO Post (description, category, beginDate)
VALUES    ("🕶 walked 120 minutes", "health", "2024-03-17 11:15:00");

INSERT    INTO Post (description, category, beginDate)
VALUES    ("ate salad", "health", "2024-03-17 11:15:00");

INSERT    INTO Post (description, category, beginDate)
VALUES    ("100 pushups", "health", "2024-03-19 11:15:00");

INSERT    INTO Post (description, category, beginDate)
VALUES    ("20 🤓 coding questions", "code", "2024-03-19 11:15:00");

INSERT    INTO Post (description, category, beginDate)
VALUES    ("build website", "code", "2024-03-19 11:15:00");

INSERT    INTO Post (description, category, color, beginDate, endDate)
VALUES    ("10 calculus problems", "math", "blue", "2024-03-10 11:15:00", "2024-03-12 11:15:00");

INSERT    INTO Post (description, category, color, beginDate, endDate)
VALUES    ("3 physics problems", "math", "#ff33cc", "2024-03-03 11:15:00", "2024-03-15 11:15:00");

INSERT    INTO Post (description, category, color, beginDate, endDate)
VALUES    ("🌎 ran outside", "health", "green", "2024-03-01 11:15:00", "2024-03-04 11:15:00");

INSERT    INTO Post (description, category, color, beginDate, endDate)
VALUES    ("eat salad", "health", "orange", "2024-03-05 11:15:00", "2024-03-08 11:15:00");

SELECT    *
FROM      Post;
