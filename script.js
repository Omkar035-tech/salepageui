const DocHtml = `<div class="size-color-selection">
                    <div class="size-selection">
                        <label class="garlic" style="margin-left:25px">Size</label>
                        <div class="selection-group">
                            <label>#1</label>
                            <select>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </div>
                        <div class="selection-group">
                            <label>#2</label>
                            <select>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </div>
                    </div>
                    <div class="color-selection">
                        <label class="garlic">Color</label>
                        <div class="selection-group">
                            <select>
                                <option>Black</option>
                                <option>Blue</option>
                                <option>Green</option>
                                <option>Purple</option>
                                <option>Orange</option>
                            </select>
                        </div>
                        <div class="selection-group">
                            <select>
                                <option>Black</option>
                                <option>Blue</option>
                                <option>Green</option>
                                <option>Purple</option>
                                <option>Orange</option>
                            </select>
                        </div>
                    </div>
                </div>`;


const dollers = [10, 18, 24];
document.getElementById("anotherDoller").innerText = 18;
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.plan-card').forEach((card, index) => {

        const radioButton = card.querySelector('.radio-button');
        const radiolayer = card.querySelector('.outerDoc');
        const appendOP = card.querySelector(".expanded-options");
        document.querySelectorAll(".expanded-options")[1].innerHTML = DocHtml;

        card.addEventListener('click', (event) => {
            if (event.target.closest('select')) return;

            document.querySelectorAll('.plan-card').forEach(c => {
                c.classList.remove('selected');
                c.querySelector('.radio-button').classList.remove('selected');
                c.querySelector('.outerDoc').classList.remove('selected');
            });
            document.getElementById("anotherDoller").innerText = dollers[index];
            card.classList.add('selected');
            radioButton.classList.add('selected');
            radiolayer.classList.add('selected');
            appendOP.innerHTML = "";
            appendOP.innerHTML = DocHtml;
        });

        const selects = card.querySelectorAll('select');
        selects.forEach(select => {
            select.addEventListener('mousedown', (event) => {
                event.stopPropagation();
            });

            select.addEventListener('change', (event) => {
                event.stopPropagation();
            });
        });
    });
});

