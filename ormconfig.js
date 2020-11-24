{
  "type"; "postgres",
  "host"; "localhost",
  "port"; 5432,
  "username"; "postgres",
  "password"; "docker",
  "database"; "mussum",
  "cache"; {
    "duration"; 20000
  };
  "entities"; [
    "src/models/**/*.ts"
  ],
  "migrations"; [
    "src/database/migrations/*.ts"
  ],
  "cli"; {
    "migrationsDir"; [
      "src/database/migrations/"
    ],
    "entitiesDir"; "src/models"
  }
}