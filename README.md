# Projekt Forum Anime

Emilia Massowa 20516 <br />
Oskar Skowrońsi 20538<br />

# Opis projektu

Plan aplikacji forum anime w Next.js<br />
1. Funkcjonalności aplikacji<br />
    Podstawowe:<br />
        Rejestracja i logowanie:<br />
            Użytkownicy mogą rejestrować się i logować (np. za pomocą NextAuth lub Firebase).<br />
            Możliwość ustawienia nicku i awataru.<br />
        Strona główna:<br />
            Lista najnowszych postów/tematów na forum.<br />
            Wyróżnione anime (np. najpopularniejsze w danym sezonie).<br />
            Pole wyszukiwania, aby przeszukać zarówno forum, jak i listę anime.<br />
        Forum:<br />
            Kategorie postów (np. „Rekomendacje”, „Dyskusje o sezonie”, „Mangi”).<br />
            Możliwość tworzenia tematów i odpowiadania na nie przez użytkowników.<br />
            Wątki w formie komentarzy z możliwością reakcji (np. 👍, ❤️).<br />
        Lista anime:<br />
            Strona z katalogiem anime, podzielona na kategorie/gatunki.<br />
            Każde anime wyświetla:<br />
                Tytuł.<br />
                Krótki opis fabuły.<br />
                Gatunki (np. Akcja, Dramat).<br />
                Informację, gdzie można je obejrzeć (np. Crunchyroll, Netflix).<br />
            Opcje filtrowania i sortowania (według gatunku, roku, popularności).<br />
        Strona szczegółowa anime:<br />
            Szczegółowe informacje o wybranym anime:<br />
                Rok wydania, studio, reżyser.<br />
                Pełny opis fabuły.<br />
                Platformy streamingowe z linkami.<br />
                Rekomendacje podobnych tytułów.<br />
        Profil użytkownika:<br />
            Wyświetlanie statystyk użytkownika (np. liczba postów, reakcje).<br />
            Edycja profilu (zmiana nicku, hasła, awataru).<br />
<br />
<br />
    Dodatkowe:  <br />
        Ranking aktywności:<br />
            Ranking użytkowników na podstawie ich aktywności na forum (posty, reakcje itp.).<br />
        Tryb ciemny:<br />
            Zmiana motywu aplikacji między jasnym a ciemnym.<br />

2. Architektura aplikacji<br />
    Strony główne:<br />
        / (Strona główna):<br />
            Najnowsze posty z forum.<br />
            Wyróżnione anime z listy.<br />
            Sekcja wyszukiwania.<br />
        /categories (Kategorie forum):<br />
            Lista wszystkich kategorii postów z liczbą tematów w każdej.<br />
        /anime (Lista anime):<br />
            Katalog anime podzielony na gatunki z filtrami.<br />
        /anime/[id] (Szczegóły anime):<br />
            Strona szczegółowa z pełnym opisem wybranego anime.<br />
        /profile/[username] (Profil użytkownika):<br />
            Strona profilowa wybranego użytkownika.<br />
    Strony systemowe:<br />
        /auth/login (Logowanie): Formularz logowania.<br />
        /auth/register (Rejestracja): Formularz rejestracji.<br />
        /settings (Ustawienia): Ustawienia profilu użytkownika.<br />

