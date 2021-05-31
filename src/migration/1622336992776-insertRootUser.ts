import {MigrationInterface, QueryRunner} from "typeorm";

export class insertRootUser1622336992776 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO USER(NAME,PASSWORD,ROLE) VALUES ('ROOT',','123','ADM')");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
