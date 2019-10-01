drop table if exists posts;
create table posts (
	tstamp datetime not null;
	content not null;
);