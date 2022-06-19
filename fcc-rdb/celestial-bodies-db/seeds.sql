--
-- GALAXY - 6 Rows
--

INSERT INTO galaxy(name, galaxy_type, has_life) VALUES
1('Milky Way', 'Disk Shaped', TRUE),
2('Proxima Centauri', 'Spiral', TRUE);

INSERT INTO galaxy(name, galaxy_type, distance_from_earth_in_mly, has_life) VALUES
3('Andromeda', 'Spiral', 2.5, FALSE),
4('Cartwheel Galaxy', 'Lenticular', 500, FALSE),
5('Cigar Galaxy', 'Starburst', 12, FALSE),
6('Pinwheel Galaxy', 'Spiral', 21, FALSE);



--
-- STAR - 6 Rows
--
INSERT INTO star(galaxy_id, name, quadrant, magnitude) VALUES
(1, 'Scorpius', 'SQ3', 2.3),
(1, 'Eridanus', 'SQ1', 2.8),
(1, 'Taurus', 'NQ1', 1.7),
(1, 'Grus', 'SQ4', 1.7),
(1, 'Orion', 'NQ1', 3.3),
(1, 'Pegasus', 'NQ4', 2.4);



--
-- PLANET - 12 Rows
--

INSERT INTO planet(star_id, name, has_life, is_spherical, planet_type, distance_from_sun) VALUES
1(, 'Mercury', FALSE, TRUE, 'Terrestrials', 37), 
2(, 'Venus', FALSE, TRUE, 'Terrestrials', 65), 
3(, 'Earth', TRUE, TRUE, 'Terrestrials', 93),
4(, 'Mars', TRUE, TRUE, 'Terrestrials', 140),
5(, 'Jupiter', FALSE, TRUE, 'Gas Giant', 480),
6(, 'Saturn', FALSE, TRUE, 'Gas Giant', 880),
7(, 'Uranus', FALSE, TRUE, 'Ice', 1780),
8(, 'Neptune', FALSE, TRUE, 'Ice', 2800),

INSERT INTO planet(star_id, name, has_life, is_spherical, planet_type) VALUES
9(, 'Ceres' FALSE, TRUE, 'Dwarfs'),
10(, 'Pluto', FALSE, TRUE, 'Dwarfs'),
11(, 'Orcus', FALSE, TRUE, 'Dwarfs'),
12(, 'Haumea', FALSE, TRUE, 'Dwarfs');



--
-- MOON - 20 Rows
--

INSERT INTO moon(planet_id, name, is_spherical, diameter, alternate_name) VALUES
(3, 'Moon', TRUE, 3500, 'Luna'),
(4, 'Phobos', FALSE, 24, 'Mars I'),
(4, 'Deimos', FALSE, 12, 'Mars II'),
(12, 'Namaka', TRUE, 170, 'Haumea II'),
(5, 'Ganymede', TRUE, 5720, 'Jupiter III'),
(6, 'Titan', TRUE, 5149, 'Saturn VI'),
(7, 'Titania', TRUE, 326, 'Uranus III'),
(7, 'Umbriel', TRUE, 210, 'Uranus II'),
(10, 'Charon', TRUE, 1212, 'Pluto I'),
(10, 'Nix', FALSE, 50, 'Pluto II'),
(10, 'Styx', FALSE, 16, 'Pluto V'),
(8, 'Triton', TRUE, 2710, 'Neptune I'),
(8, 'Nereid', FALSE, 180, 'Neptune II'),
(8, 'Hippocamp', FALSE, 35, 'Neptune XIV'),
(8, 'Proteus', FALSE, 400, 'Neptune VIII'),
(6, 'Europa', TRUE, 3100, 'Jupiter II'),
(10, 'Kerberos', FALSE, 19, 'Pluto IV');

INSERT INTO moon(planet_id, name, is_spherical, alternate_name) VALUES
(6, 'Rhea', TRUE, 'Saturn V'),
(7, 'Oberon', TRUE, 'Uranus IV'),
(5, 'Callisto', TRUE, 'Jupiter IV');



--
-- LIFEFORM - 3 ROWS
--

INSERT INTO lifeform(planet_id, name, language) VALUES
(1, 'Human', 'English'),
(2, 'Alien', 'Binary'),
(1, 'Fairies', 'Ni No Kuni');

