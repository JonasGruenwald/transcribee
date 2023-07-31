from typing import Iterable

from typing_extensions import Self

class Locale:
    def __init__(self, locale: str): ...

class BreakIterator(Iterable[int]):
    @classmethod
    def createCharacterInstance(cls, locale: Locale) -> Self: ...
    @classmethod
    def createWordInstance(cls, locale: Locale) -> Self: ...
    @classmethod
    def createLineInstance(cls, locale: Locale) -> Self: ...
    @classmethod
    def createSentenceInstance(cls, locale: Locale) -> Self: ...
    def setText(self, text: str): ...
