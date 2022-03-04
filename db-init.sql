-- SQLite
DELETE FROM subscriber;

INSERT INTO subscriber VALUES
( 1, "Anna Eliason", "anna.eliason@gmail.com"),
( 2, "Jack Smith", "jack.smith@gmail.com"),
( 3, "Mary Bradford", "mary.bradford@gmail.com"),
( 4, "John Doe", "john.doe@gmail.com"),
( 5, "Charlene Mellon", "charlene.mellon@gmail.com"),
( 6, "Gregory Wilson", "gregory.wilson@gmail.com");

DELETE FROM movie;
DELETE FROM genre;

INSERT INTO genre VALUES 
( 1, "Action"),
( 2, "Adventure"),
( 3, "Comedy"),
( 4, "Drama"),
( 5, "Animation"),
( 6, "Romance"),
( 7, "SCI-FI"),
( 8, "Horror");

INSERT INTO movie VALUES
( 11, "The King's Man", "In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions.", 2021, 1),
( 12, "Uncharted", "Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor 'Sully' Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.", 2022, 1),
( 13, "The Batman", "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.", 2022, 1),
( 14, "Spider-Man: No Way Home", "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.", 2021, 1),

( 21, "Ghostbusters: Afterlife", "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.", 2021, 2),
( 22, "Eternals", "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.", 2021, 2),
( 23, "Dune", "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.", 2021, 2),

( 31, "Free Guy", "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.", 2021, 3),
( 32, "Dog", "Two former Army Rangers are paired against their will on the road trip of a lifetime. Briggs (Channing Tatum) and Lulu (a Belgian Malinois) race down the Pacific Coast to get to a fellow soldier's funeral on time.", 2022, 3),
( 33, "CODA", "As a CODA (Child of Deaf Adults) Ruby is the only hearing person in her deaf family. When the family's fishing business is threatened, Ruby finds herself torn between pursuing her love of music by wanting to go to Berklee College of Music and her fear of abandoning her parents.", 2021, 3),

( 41, "Death on the Nile", "While on vacation on the Nile, Hercule Poirot must investigate the murder of a young heiress.", 2022, 4),
( 42, "Nightmare Alley", "An ambitious carny with a talent for manipulating people with a few well-chosen words hooks up with a female psychiatrist who is even more dangerous than he is.", 2021, 4),
( 43, "House of Gucci", "When Patrizia Reggiani, an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition begins to unravel their legacy and triggers a reckless spiral of betrayal, decadence, revenge, and ultimately...murder.", 2021, 4),

( 71, "Doctor Strange in the Multiverse of Madness", "Dr. Stephen Strange casts a forbidden spell that opens the door to the multiverse, including an alternate version of himself, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff.", 2022, 7),
( 72, "Moonfall", "A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it.", 2022, 7),
( 73, "The Matrix Resurrections", "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more.", 2021, 7),
( 74, "Shang-Chi and the Legend of the Ten Rings", "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.", 2021, 7),
( 75, "Avengers: Endgame", "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.", 2019, 7);

