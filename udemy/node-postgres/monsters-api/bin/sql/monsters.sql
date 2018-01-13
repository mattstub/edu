CREATE TABLE monsters (
  id serial,
  name varchar(50),
  personality varchar(50)
);

CREATE TABLE habitats (
  id serial,
  name varchar(50),
  climate varchar(50),
  temperature int
);

CREATE TABLE lives (
  monster varchar(50),
  habitat varchar(50)
);

INSERT INTO monsters (name, personality)
VALUES
('Fluffy', 'Aggressive'),
('Noodles', 'Impatient'),
('Rusty', 'Passionate');

INSERT INTO habitats (name, climate, temperature)
VALUES
('Desert', 'Dry', 100),
('Forest', 'Haunted', 70),
('Mountain', 'Icy', 30);

INSERT INTO lives (monster, habitat)
VALUES
('Fluffy', 'Desert'),
('Noodles', 'Forest'),
('Rusty', 'Mountain');
