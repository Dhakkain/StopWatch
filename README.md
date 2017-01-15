# StopWatch
Stop watch with time lap. ASP.NET MVC + JavaScript


Działanie:
Użytkownik po otwarciu strony klika przycisk START. Następuje uruchomienie odliczania. Przycisk
START zmienia nazwę na STOP. Kliknięcie STOP spowoduje zatrzymanie odliczania. Jeśli stoper odlicza,
użytkownik może zapisać czas okrążenia. Powinien pojawić się on w tabeli znajdującej się poniżej
przycisków. Tabela czasów okrążenia może zawierać max 5 elementów. W przypadku zapisania
szóstego i kolejnego czasu „najstarszy” element z listy zostanie usunięty „zwalniając” miejsce dla
nowego. Tabela posortowana jest chronologicznie – najnowszy czas okrążenia jest na górze.
Po kliknięciu przycisku STOP czas główny oraz międzyczasy są nadal wyświetlane, a przycisk STOP
zmienia się w przycisk START. Po ponownym kliknięciu START lista czasów okrążenia oraz czas główny
zostają wykasowane i cały proces zaczyna się od początku.
Program nie powinien korzystać z bazy danych. Czas główny jak i czasy okrążenia przechowywane są
w obiektach dynamicznych. Przeładowanie strony powoduje wykasowanie wszystkich danych
przechowywanych przez stoper.
