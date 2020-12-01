import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateTeacher1606785917044 implements MigrationInterface {
  name = 'CreateTeacher1606785917044';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "teacher" ADD "phone" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "teacher" ADD "email" character varying NOT NULL`,
    );
    await queryRunner.query(
      `CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "query-result-cache"`);
    await queryRunner.query(`ALTER TABLE "teacher" DROP COLUMN "email"`);
    await queryRunner.query(`ALTER TABLE "teacher" DROP COLUMN "phone"`);
  }
}
