import { ColumnType, Generated, Insertable, Selectable, Updateable } from "kysely";

export interface Database {
	users: UserTable;
}

export interface UserTable {
	id: Generated<number>;
	name: string;
	created_at: ColumnType<Date, string | undefined, never>;
}

export type Person = Selectable<UserTable>;
export type NewPerson = Insertable<UserTable>;
export type PersonUpdate = Updateable<UserTable>;
