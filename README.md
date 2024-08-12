შექმენით ახალი რეპოზიტორი სახელად react-app

დააინსტალირეთ პაკეტები:

tailwind

react-router-dom

სილებისთვის გამოიყენეთ tailwind

დაამატეთ კომპონენტები:

Header - მარცხენა მხარეს ჩასვით კომპანიის პირობითი ლოგო (ლოგოზე დაჭერისად უნდა მაბრუნებდეს მთავარ გვერძე), ხოლო მარჯვენა მხარეს გააკეთეთ ნავიგაცია: (Missions, About, Contact)

შექმენით ნავიგაციის შესაბამისი გვერდები: Missions, About, Contact

გვერდევბის URL მისამათები:

     / - მთავარი გვერდი
     
     /missions - დავალებების გვერდი
     
     /about - შესახებ გვერდი
     
     /contact - კონტაქტის გვერდი

react-router-dom-ის გამოყენებით მოაწყეთ პროექტი ისე რომ მუშაობდეს როუტინგი (გვერდიდან გვერძე გადასვლა)

მთავარ გვერძე გამოიტანეთ სათაური: "SpaceX Missions"

Missions გვერძე მიაკითხეთ: https://api.spacexdata.com/v3/missions და დაბრუნებული ინფორმაცია შეინახეთ სთეითში, შენახვის შემდეგ HTML-ში გააკეთეთ ქარდი და გამოიტანეთ პარამეტრები: mission_name, mission_id, description

ხოლო ქარდზე დაკლიკებისას გადაამისამართეთ wikipedia პარამეტრში მოსულ ლინკზე

About გვერძე გამოიტანეთ lorem ipsum-ის ნებისმიერ ტექსტი, სათაური და პარაგრაფი: https://www.lipsum.com/

Contact გვერძე შექმენით ფორმა, (first_name, last_name, email, message)

first_name და last_name ტექსტური ველებია

email- უნდა უყოს email ტიპის

message - ტექსტური არეა

ღილაკზე "Submit" დაჭერისას დაბეჭდეთ ლოგში ყველა შეყვანილი ველის მნიშვნელობა

აღნიშნული პროექტი უნდა დაამატოთ თქვენს github -ზე როგორც ახალი რეპოზიტორი და იქ უნდა ატვირთოთ :)
