import { Selector } from 'testcafe'
import { axeCheck, createReport } from 'axe-testcafe';


fixture `a11y demo`
    .page `https://www.thequalityduck.co.uk/`

    test('Check accessibility with aXe', async t => {
        await t.expect(Selector('.post-title').innerText).contains('Welcome to The Quality Duck');
        const { error, violations } = await axeCheck(t);
        await t.expect(violations.length === 0).ok(createReport(violations));
    })