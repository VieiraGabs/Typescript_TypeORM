import { MigrationInterface, QueryRunner } from 'typeorm';

export default class UpdateStudent1606787402089 implements MigrationInterface {
  name = 'UpdateStudent1606787402089';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "student" ADD "note" integer NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "note"`);
  }
}
