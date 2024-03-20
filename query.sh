#!/usr/bin/bash

sqlite3 prisma/dev.db <<EOF
.headers on
select * from post order by begindate;
EOF

