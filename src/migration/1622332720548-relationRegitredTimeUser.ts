import {MigrationInterface, QueryRunner} from "typeorm";

export class relationRegitredTimeUser1622332720548 implements MigrationInterface {
    name = 'relationRegitredTimeUser1622332720548'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "registred_time" ADD CONSTRAINT "FK_51d1169afb1a7a10190d6592546" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "registred_time" DROP CONSTRAINT "FK_51d1169afb1a7a10190d6592546"`);
        await queryRunner.query(`DROP TABLE "registred_time"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
