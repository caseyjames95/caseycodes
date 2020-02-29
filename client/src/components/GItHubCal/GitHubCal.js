import React from 'react'
import ReactTooltip from 'react-tooltip'
import GitHubCalendar from 'react-github-calendar'

import './GitHubCal.css'

const defaultTheme = {
    background: 'transparent',
    text: '#000',
    grade0: '#ffdab3',
    grade1: '#ffb236',
    grade2: '#ff9c1a',
    grade3: '#ed8600',
    grade4: '#d37100',
};

const GitHubCal = app => {
    return (
            <GitHubCalendar username="caseyjames95" theme={defaultTheme}>
                <ReactTooltip delayShow={50} />
            </GitHubCalendar>
    )
}

export default GitHubCal;