
import React from 'react'
import { Icon,Statistic } from 'semantic-ui-react'
import CountUp from 'react-countup'
import '../App.css'

const UserStatistic = ({stats,persons}) => {
    return (    <div className='user-statistic-container'>
                    <div className='user-statistic'>
                                
                                    <div className='user-statistic'>
                                        <Statistic>
                                            <Statistic.Value>
                                                {<CountUp end={stats.total||0}/>}
                                            </Statistic.Value>
                                            <Statistic.Label>
                                                work totals
                                            </Statistic.Label>
                                        </Statistic>
                                    </div>
                                    <div className='user-statistic'>
                                        <Statistic color="green">
                                            <Statistic.Value>
                                                {<CountUp end={stats.paid_total||0}/>}
                                            </Statistic.Value>
                                            <Statistic.Label>
                                                work paid totals
                                            </Statistic.Label>
                                        </Statistic>
                                    </div>   
                    </div>
                    <div className='user-statistic'>
                        <div className='user-statistic'>
                            <Statistic>
                                <Statistic.Value>
                                    <Icon name='user circle outline' >{<CountUp end={persons?.length||0}/>}</Icon>
                                </Statistic.Value>
                                <Statistic.Label>
                                    work assigner totals
                                </Statistic.Label>
                            </Statistic>
                        </div>
                        <div className='user-statistic'>
                            <Statistic color="red">
                                <Statistic.Value>
                                    {<CountUp end={stats.not_paid_total||0}/>}
                                </Statistic.Value>
                                <Statistic.Label>
                                    work not paid totals
                                </Statistic.Label>
                            </Statistic>
                        </div>      
                                    
                    </div>
                </div>
    )
}

export default UserStatistic
