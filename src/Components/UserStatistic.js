
import React from 'react'
import { Icon,Statistic } from 'semantic-ui-react'
import CountUp from 'react-countup'
import '../App.css'

const UserStatistic = ({work}) => {
    return (
        <div className="user-statistics">
                            <div>
                                <Statistic.Group widths='two'>
                                    <Statistic>
                                        <Statistic.Value>
                                            {<CountUp end={work.data.length}/>}
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            work totals
                                        </Statistic.Label>
                                    </Statistic>
                                    <Statistic>
                                        <Statistic.Value>
                                            <Icon name='user circle outline' >{<CountUp end={work.data.length}/>}</Icon>
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            work assigner totals
                                        </Statistic.Label>
                                    </Statistic>
                                </Statistic.Group>
                                
                                
                            </div>
                            <div>
                        
                                <Statistic.Group widths='two'>
                                    <Statistic color="green">
                                        <Statistic.Value>
                                            {<CountUp end={work.data.length}/>}
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            work paid totals
                                        </Statistic.Label>
                                    </Statistic>
                                    <Statistic color="red">
                                        <Statistic.Value>
                                            {<CountUp end={work.data.length}/>}
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            work not paid totals
                                        </Statistic.Label>
                                    </Statistic>
                                </Statistic.Group>
                            </div>
                        </div>
    )
}

export default UserStatistic
