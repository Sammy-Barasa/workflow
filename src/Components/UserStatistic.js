
import React from 'react'
import { Icon,Statistic } from 'semantic-ui-react'
import CountUp from 'react-countup'
import '../App.css'

const UserStatistic = ({stats,persons}) => {
    return (
        <div className="user-statistics">
                            <div>
                                <Statistic.Group widths='two'>
                                    <Statistic>
                                        <Statistic.Value>
                                            {<CountUp end={stats.total}/>}
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            work totals
                                        </Statistic.Label>
                                    </Statistic>
                                    <Statistic>
                                        <Statistic.Value>
                                            <Icon name='user circle outline' >{<CountUp end={persons.length}/>}</Icon>
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
                                            {<CountUp end={stats.paid_total}/>}
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            work paid totals
                                        </Statistic.Label>
                                    </Statistic>
                                    <Statistic color="red">
                                        <Statistic.Value>
                                            {<CountUp end={stats.not_paid_total}/>}
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
