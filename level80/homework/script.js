

// საიტზე მოცემული სამი ფოტოდან პირველი ორის შემთხვევაში მათზე მაუსის გადატარებისას შეიცვალოს ეს ფოტოები და კურსორის გაწევის შედეგად ისევ დაუბრუნდეს თავდაპირველ ფოტოს.

  const image1 = document.getElementById('download (3).jpg');
  const image2 = document.getElementById('download (5).jpg');

  image1.addEventListener('mouseover', function(){
    image1.src = 'download (3).jpg';
  });

  image1.addEventListener('mouseout', function() {
    image1.src = 'download (3).jpg';
  });

  image2.addEventListener('mouseover', function() {
    image2.src = 'download (5).jpg';
  });

  image2.addEventListener('mouseout', function() {
    image2.src = 'download (5).jpg';
  });


//  მესამე ფოტო დაჭერის შედეგად ჩაანაცვლეთ სხვა ფოტოთი, ამ შემთხვევაშიც უნდა უბრუნდებოდეს საწყის ფოტოს კურსორის გაწევის შემდეგ.

  const image3 = document.getElementById('image3');

  image3.addEventListener('click', function() {
    image3.src = 'download (2).jpg';
  });

  image3.addEventListener('mouseout', function() {
    image3.src = 'download (2).jpg';
  });


{/* საიტზე დაამატეთ ერთი ფოტო. მასზე დაჭერის შედეგად უნდა იცვლებოდეს იგი მეორე ფოტოთი, ხოლო მეორე ფოტოზე მაუსის გადატარების შემთხვევაში ისიც უნდა ჩანაცვლდეს ამჯერად კიდევ განსხვავებული მესამე ფოტოთი. მესამე ფოტოზე კიდევ ერთხელ დაჭერა უნდა იწევევდეს თავდაპირველი ფოტოს დაბრუნებას. */}

  const image7 = document.getElementById('download (7).jpg');
  let clickCount = 0;

  image7.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
      image7.src = 'download (6).jpg';
    }
})