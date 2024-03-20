#!/usr/bin/bash

sqlite3 prisma/dev.db < prisma/seed.sql
