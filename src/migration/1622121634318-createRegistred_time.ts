import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class createReagistredTime1622085569870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
      await queryRunner.createTable(
        new Table({
          name: 'registred_time',
          columns: [
          {
            name:'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name:'userId',
            type: 'uuid',
            isNullable:false
          },
          {
            name:'time_registred',
            type: 'timestamp',
            isNullable:false
          },
          {
            name:'created_At',
            type:'timestamp',
            default: 'now()',
          }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable('registred_time');
    }

}
