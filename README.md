# Projekt Forum Anime

Emilia Massowa 20516
Oskar Skowrońsi 20538

# Opis projektu

Plan aplikacji forum anime w Next.js
1. Funkcjonalności aplikacji
    Podstawowe:
        Rejestracja i logowanie:
            Użytkownicy mogą rejestrować się i logować (np. za pomocą NextAuth lub Firebase).
            Możliwość ustawienia nicku i awataru.
        Strona główna:
            Lista najnowszych postów/tematów na forum.
            Wyróżnione anime (np. najpopularniejsze w danym sezonie).
            Pole wyszukiwania, aby przeszukać zarówno forum, jak i listę anime.
        Forum:
            Kategorie postów (np. „Rekomendacje”, „Dyskusje o sezonie”, „Mangi”).
            Możliwość tworzenia tematów i odpowiadania na nie przez użytkowników.
            Wątki w formie komentarzy z możliwością reakcji (np. 👍, ❤️).
        Lista anime:
            Strona z katalogiem anime, podzielona na kategorie/gatunki.
            Każde anime wyświetla:
                Tytuł.
                Krótki opis fabuły.
                Gatunki (np. Akcja, Dramat).
                Informację, gdzie można je obejrzeć (np. Crunchyroll, Netflix).
            Opcje filtrowania i sortowania (według gatunku, roku, popularności).
        Strona szczegółowa anime:
            Szczegółowe informacje o wybranym anime:
                Rok wydania, studio, reżyser.
                Pełny opis fabuły.
                Platformy streamingowe z linkami.
                Rekomendacje podobnych tytułów.
        Profil użytkownika:
            Wyświetlanie statystyk użytkownika (np. liczba postów, reakcje).
            Edycja profilu (zmiana nicku, hasła, awataru).


    Dodatkowe:  
        Ranking aktywności:
            Ranking użytkowników na podstawie ich aktywności na forum (posty, reakcje itp.).
        Tryb ciemny:
            Zmiana motywu aplikacji między jasnym a ciemnym.

2. Architektura aplikacji
    Strony główne:
        / (Strona główna):
            Najnowsze posty z forum.
            Wyróżnione anime z listy.
            Sekcja wyszukiwania.
        /categories (Kategorie forum):
            Lista wszystkich kategorii postów z liczbą tematów w każdej.
        /anime (Lista anime):
            Katalog anime podzielony na gatunki z filtrami.
        /anime/[id] (Szczegóły anime):
            Strona szczegółowa z pełnym opisem wybranego anime.
        /profile/[username] (Profil użytkownika):
            Strona profilowa wybranego użytkownika.
    Strony systemowe:
        /auth/login (Logowanie): Formularz logowania.
        /auth/register (Rejestracja): Formularz rejestracji.
        /settings (Ustawienia): Ustawienia profilu użytkownika.

