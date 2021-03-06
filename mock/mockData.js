const books = [
  {
    id: 1,
    title: "Porgy and Bess",
    description:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    author: "Elsy Seale",
    pageCount: 443,
    isbn: "789528077-5",
    price: 36.26,
    imageUrl: "http://dummyimage.com/233x191.png/dddddd/000000",
  },
  {
    id: 2,
    title: "King of Jazz",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    author: "Tally Achrameev",
    pageCount: 209,
    isbn: "653957594-7",
    price: 45.76,
    imageUrl: "http://dummyimage.com/143x143.png/cc0000/ffffff",
  },
  {
    id: 3,
    title: "Any Questions for Ben?",
    description:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    author: "Marie-ann Colquit",
    pageCount: 469,
    isbn: "383281888-X",
    price: 45.32,
    imageUrl: "http://dummyimage.com/169x176.bmp/cc0000/ffffff",
  },
  {
    id: 4,
    title: "Yellow Submarine",
    description:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    author: "Lyndsey Doick",
    pageCount: 342,
    isbn: "868875566-3",
    price: 77.79,
    imageUrl: "http://dummyimage.com/242x141.png/5fa2dd/ffffff",
  },
  {
    id: 5,
    title: "Cell, The",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    author: "Dorotea Duesbury",
    pageCount: 302,
    isbn: "706662163-8",
    price: 12.44,
    imageUrl: "http://dummyimage.com/216x191.png/ff4444/ffffff",
  },
  {
    id: 6,
    title: "Bicentennial Man",
    description:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    author: "Nedi Pettingill",
    pageCount: 109,
    isbn: "772120687-1",
    price: 62.79,
    imageUrl: "http://dummyimage.com/170x148.png/ff4444/ffffff",
  },
  {
    id: 7,
    title: "Sapphire",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    author: "Roobbie Parkes",
    pageCount: 492,
    isbn: "785852141-1",
    price: 46.17,
    imageUrl: "http://dummyimage.com/159x120.bmp/cc0000/ffffff",
  },
  {
    id: 8,
    title: "How to Marry a Millionaire",
    description:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    author: "Rania Farlane",
    pageCount: 404,
    isbn: "971061416-9",
    price: 70.18,
    imageUrl: "http://dummyimage.com/130x197.jpg/dddddd/000000",
  },
  {
    id: 9,
    title: "Long Day's Journey Into Night",
    description:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    author: "Murdock Ovendon",
    pageCount: 424,
    isbn: "267869492-5",
    price: 37.88,
    imageUrl: "http://dummyimage.com/106x165.png/ff4444/ffffff",
  },
  {
    id: 10,
    title: "Anything Goes",
    description:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    author: "Aurie Churm",
    pageCount: 363,
    isbn: "240327084-9",
    price: 25.39,
    imageUrl: "http://dummyimage.com/239x174.bmp/cc0000/ffffff",
  },
  {
    id: 11,
    title: "Baadasssss! (How to Get the Man's Foot Outta Your Ass)",
    description:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    author: "Daisie Gerrie",
    pageCount: 267,
    isbn: "136320043-7",
    price: 10.85,
    imageUrl: "http://dummyimage.com/250x178.png/dddddd/000000",
  },
  {
    id: 12,
    title: "Legend of Bagger Vance, The",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    author: "Hewie Geffen",
    pageCount: 101,
    isbn: "899355167-7",
    price: 81.36,
    imageUrl: "http://dummyimage.com/170x158.bmp/5fa2dd/ffffff",
  },
  {
    id: 13,
    title: "Dream Land",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    author: "Umeko Dibden",
    pageCount: 191,
    isbn: "144286159-2",
    price: 64.53,
    imageUrl: "http://dummyimage.com/129x148.png/cc0000/ffffff",
  },
  {
    id: 14,
    title: "28 Up",
    description:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    author: "Elias Arrundale",
    pageCount: 459,
    isbn: "916646717-9",
    price: 22.99,
    imageUrl: "http://dummyimage.com/136x142.jpg/5fa2dd/ffffff",
  },
  {
    id: 15,
    title: "Terminal USA",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    author: "Ariela Creffield",
    pageCount: 452,
    isbn: "219440928-9",
    price: 94.36,
    imageUrl: "http://dummyimage.com/196x121.png/cc0000/ffffff",
  },
  {
    id: 16,
    title: "Katy Perry: Part of Me",
    description:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    author: "Hadlee Sedgeman",
    pageCount: 181,
    isbn: "892987778-8",
    price: 64.9,
    imageUrl: "http://dummyimage.com/132x227.jpg/5fa2dd/ffffff",
  },
  {
    id: 17,
    title: "I, Robot",
    description:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    author: "Gregoire Giffin",
    pageCount: 349,
    isbn: "263990566-X",
    price: 55.56,
    imageUrl: "http://dummyimage.com/162x161.jpg/ff4444/ffffff",
  },
  {
    id: 18,
    title: "Artois the Goat",
    description:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    author: "Milly Riseam",
    pageCount: 178,
    isbn: "349215552-9",
    price: 28.77,
    imageUrl: "http://dummyimage.com/148x209.bmp/cc0000/ffffff",
  },
  {
    id: 19,
    title: "Never Back Down",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    author: "Ingram Gilhool",
    pageCount: 362,
    isbn: "048961071-4",
    price: 73.26,
    imageUrl: "http://dummyimage.com/203x113.bmp/cc0000/ffffff",
  },
  {
    id: 20,
    title: "Sonny",
    description:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    author: "Kirbee Pardy",
    pageCount: 145,
    isbn: "192797578-6",
    price: 26.36,
    imageUrl: "http://dummyimage.com/201x153.jpg/5fa2dd/ffffff",
  },
  {
    id: 21,
    title: "Southland Tales",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    author: "Isa Kalb",
    pageCount: 259,
    isbn: "335281876-2",
    price: 36.48,
    imageUrl: "http://dummyimage.com/180x237.bmp/5fa2dd/ffffff",
  },
  {
    id: 22,
    title: "It Came from Outer Space",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    author: "Sibeal Gallager",
    pageCount: 472,
    isbn: "130535455-9",
    price: 72.35,
    imageUrl: "http://dummyimage.com/126x104.bmp/dddddd/000000",
  },
  {
    id: 23,
    title: "Mostly Martha (Bella Martha)",
    description:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    author: "Tedmund Basili",
    pageCount: 437,
    isbn: "871684799-7",
    price: 84.66,
    imageUrl: "http://dummyimage.com/104x218.jpg/cc0000/ffffff",
  },
  {
    id: 24,
    title: "Goodbye Girl, The",
    description:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    author: "Tiphani Eckford",
    pageCount: 119,
    isbn: "791889270-4",
    price: 83.05,
    imageUrl: "http://dummyimage.com/180x103.jpg/dddddd/000000",
  },
  {
    id: 25,
    title: "The Forgotten Faces",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    author: "Mahmud Sallis",
    pageCount: 412,
    isbn: "762150913-9",
    price: 90.38,
    imageUrl: "http://dummyimage.com/126x218.jpg/dddddd/000000",
  },
  {
    id: 26,
    title: "Outrageous Class (Hababam sinifi)",
    description:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    author: "Reamonn Blackborow",
    pageCount: 188,
    isbn: "217443552-7",
    price: 98.44,
    imageUrl: "http://dummyimage.com/250x184.jpg/5fa2dd/ffffff",
  },
  {
    id: 27,
    title: "The Second Best Exotic Marigold Hotel",
    description:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    author: "Lizabeth Woolston",
    pageCount: 284,
    isbn: "822216908-4",
    price: 44.11,
    imageUrl: "http://dummyimage.com/147x231.jpg/cc0000/ffffff",
  },
  {
    id: 28,
    title: "Taken",
    description:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    author: "Hazel Woodbridge",
    pageCount: 278,
    isbn: "997468200-2",
    price: 38.69,
    imageUrl: "http://dummyimage.com/101x219.png/cc0000/ffffff",
  },
  {
    id: 29,
    title: "Musicwood",
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    author: "Oren Nevins",
    pageCount: 321,
    isbn: "630728953-8",
    price: 90.14,
    imageUrl: "http://dummyimage.com/126x220.bmp/cc0000/ffffff",
  },
  {
    id: 30,
    title: "Good Job:  Stories of the FDNY, A",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    author: "Tannie Peyes",
    pageCount: 293,
    isbn: "972041533-9",
    price: 77.74,
    imageUrl: "http://dummyimage.com/181x181.png/cc0000/ffffff",
  },
  {
    id: 31,
    title: "Boob, The",
    description:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    author: "Consuelo Corsan",
    pageCount: 288,
    isbn: "575992651-9",
    price: 48.88,
    imageUrl: "http://dummyimage.com/120x113.bmp/dddddd/000000",
  },
  {
    id: 32,
    title: "Titanic",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    author: "Edee Edwardson",
    pageCount: 462,
    isbn: "522838537-1",
    price: 35.86,
    imageUrl: "http://dummyimage.com/155x183.jpg/dddddd/000000",
  },
  {
    id: 33,
    title: "In & Out",
    description:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    author: "Godfry Scourgie",
    pageCount: 156,
    isbn: "683647621-8",
    price: 92.43,
    imageUrl: "http://dummyimage.com/214x154.bmp/5fa2dd/ffffff",
  },
  {
    id: 34,
    title: "Blue Velvet",
    description:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    author: "Tedmund Waring",
    pageCount: 182,
    isbn: "806109530-0",
    price: 79.34,
    imageUrl: "http://dummyimage.com/217x142.bmp/ff4444/ffffff",
  },
  {
    id: 35,
    title: "Jar, The (Khomreh)",
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    author: "Simone Maymond",
    pageCount: 313,
    isbn: "967698007-2",
    price: 64.29,
    imageUrl: "http://dummyimage.com/207x167.bmp/ff4444/ffffff",
  },
  {
    id: 36,
    title: "Long Good Friday, The",
    description:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    author: "Cosmo Stretton",
    pageCount: 444,
    isbn: "477047085-1",
    price: 35.32,
    imageUrl: "http://dummyimage.com/194x137.bmp/5fa2dd/ffffff",
  },
  {
    id: 37,
    title: "Naked Gun 2 1/2: The Smell of Fear, The",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    author: "Nichols Crigin",
    pageCount: 300,
    isbn: "214478644-5",
    price: 52.4,
    imageUrl: "http://dummyimage.com/161x111.jpg/5fa2dd/ffffff",
  },
  {
    id: 38,
    title: "The Fighting 69th",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    author: "Dawn Rosoman",
    pageCount: 487,
    isbn: "378016453-1",
    price: 95.82,
    imageUrl: "http://dummyimage.com/132x212.jpg/ff4444/ffffff",
  },
  {
    id: 39,
    title: "Nurse Betty",
    description:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    author: "Heinrik Mc Elory",
    pageCount: 106,
    isbn: "013914509-5",
    price: 78.98,
    imageUrl: "http://dummyimage.com/114x214.bmp/cc0000/ffffff",
  },
  {
    id: 40,
    title: "Fanboys",
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    author: "Xaviera Janikowski",
    pageCount: 428,
    isbn: "453686875-5",
    price: 15.27,
    imageUrl: "http://dummyimage.com/202x243.bmp/cc0000/ffffff",
  },
  {
    id: 41,
    title: "Extremely Goofy Movie, An",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    author: "Joel Joselovitch",
    pageCount: 333,
    isbn: "423496665-7",
    price: 43.28,
    imageUrl: "http://dummyimage.com/131x134.jpg/ff4444/ffffff",
  },
  {
    id: 42,
    title: "Edge of Fear (Ella y el miedo)",
    description:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    author: "Marillin Mayne",
    pageCount: 118,
    isbn: "631699893-7",
    price: 85.35,
    imageUrl: "http://dummyimage.com/199x153.jpg/5fa2dd/ffffff",
  },
  {
    id: 43,
    title: "Adventurer, The",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    author: "Matty Myhan",
    pageCount: 112,
    isbn: "564993342-1",
    price: 95.65,
    imageUrl: "http://dummyimage.com/130x238.bmp/5fa2dd/ffffff",
  },
  {
    id: 44,
    title: "Dead Man's Bluff",
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    author: "Tallie Digance",
    pageCount: 394,
    isbn: "590433989-5",
    price: 59.25,
    imageUrl: "http://dummyimage.com/151x138.png/ff4444/ffffff",
  },
  {
    id: 45,
    title: "M. Butterfly",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    author: "Brian Challiss",
    pageCount: 220,
    isbn: "917738605-1",
    price: 94.97,
    imageUrl: "http://dummyimage.com/156x202.bmp/5fa2dd/ffffff",
  },
  {
    id: 46,
    title: "Time Traveler's Wife, The",
    description:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    author: "Lexie Woofinden",
    pageCount: 394,
    isbn: "937180599-4",
    price: 29.17,
    imageUrl: "http://dummyimage.com/225x135.bmp/cc0000/ffffff",
  },
  {
    id: 47,
    title: "Bathory",
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    author: "Ina Oughton",
    pageCount: 292,
    isbn: "587443839-4",
    price: 24.48,
    imageUrl: "http://dummyimage.com/228x179.png/dddddd/000000",
  },
  {
    id: 48,
    title: "Pictures of the Old World (Obrazy starého sveta)",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    author: "Gertruda Sinderson",
    pageCount: 265,
    isbn: "990184636-6",
    price: 37.16,
    imageUrl: "http://dummyimage.com/227x137.jpg/dddddd/000000",
  },
  {
    id: 49,
    title: "My Winnipeg",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    author: "Nicolette Gallafant",
    pageCount: 452,
    isbn: "965140367-5",
    price: 35.09,
    imageUrl: "http://dummyimage.com/213x199.jpg/5fa2dd/ffffff",
  },
  {
    id: 50,
    title: "I'm Not Rappaport",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    author: "Howard Usher",
    pageCount: 251,
    isbn: "988544181-6",
    price: 45.45,
    imageUrl: "http://dummyimage.com/162x161.png/ff4444/ffffff",
  },
];

const cart = [
  {
    id: 1,
    bookId: 11,
  },
  {
    id: 2,
    bookId: 1,
  },
  {
    id: 3,
    bookId: 11,
  },
];

const rates = [
  {
    countryCode: "SG",
    tax: 0.1,
    shipping: 5.0,
  },
];

const orders = [
  {
    id: 1,
    bookId: 21,
    date: "2020-01-01",
    status: "Delivered",
    book: {
      id: 21,
      title: "Southland Tales",
      description:
        "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
      author: "Isa Kalb",
      pageCount: 259,
      isbn: "335281876-2",
      price: 36.48,
      imageUrl: "http://dummyimage.com/180x237.bmp/5fa2dd/ffffff",
    },
  },
  {
    id: 2,
    bookId: 22,
    date: "2020-01-02",
    status: "Delivered",
    book: {
      id: 22,
      title: "It Came from Outer Space",
      description:
        "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
      author: "Sibeal Gallager",
      pageCount: 472,
      isbn: "130535455-9",
      price: 72.35,
      imageUrl: "http://dummyimage.com/126x104.bmp/dddddd/000000",
    },
  },
  {
    id: 3,
    bookId: 23,
    date: "2020-01-03",
    status: "Cancelled",
    book: {
      id: 23,
      title: "Mostly Martha (Bella Martha)",
      description:
        "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      author: "Tedmund Basili",
      pageCount: 437,
      isbn: "871684799-7",
      price: 84.66,
      imageUrl: "http://dummyimage.com/104x218.jpg/cc0000/ffffff",
    },
  },
  {
    id: 4,
    bookId: 1,
    date: "2019-01-01",
    status: "Delivered",
    book: {
      id: 1,
      title: "Porgy and Bess",
      description:
        "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
      author: "Elsy Seale",
      pageCount: 443,
      isbn: "789528077-5",
      price: 36.26,
      imageUrl: "http://dummyimage.com/233x191.png/dddddd/000000",
    },
  },
  {
    id: 5,
    bookId: 2,
    date: "2019-01-02",
    status: "Delivered",
    book: {
      id: 2,
      title: "King of Jazz",
      description:
        "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      author: "Tally Achrameev",
      pageCount: 209,
      isbn: "653957594-7",
      price: 45.76,
      imageUrl: "http://dummyimage.com/143x143.png/cc0000/ffffff",
    },
  },
  {
    id: 6,
    bookId: 3,
    date: "2019-01-03",
    status: "Cancelled",
    book: {
      id: 3,
      title: "Any Questions for Ben?",
      description:
        "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
      author: "Marie-ann Colquit",
      pageCount: 469,
      isbn: "383281888-X",
      price: 45.32,
      imageUrl: "http://dummyimage.com/169x176.bmp/cc0000/ffffff",
    },
  },
];

const addresses = [];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  books,
  cart,
  rates,
  orders,
  addresses,
};
